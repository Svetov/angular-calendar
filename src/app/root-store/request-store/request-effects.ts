import { Injectable } from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects'
import { Action, select } from '@ngrx/store'
import { Observable, from } from 'rxjs'
import { map, mapTo, mergeMap, switchMap, catchError, tap, withLatestFrom } from 'rxjs/operators'
import { RequestActionTypes, RequestActions, changeStatus } from './request-action'
import { State, StateEffects } from './request-state'
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore'
import { Store } from '@ngrx/store'
import { selectClocks, selectDay } from '../root-selectors'
import { HttpHeaders, HttpClient } from '@angular/common/http'
import * as AppParametrs from '../../app.parametrs'
import * as firebase from 'firebase'


@Injectable()
export class RequestEffect {
	private request_collection: AngularFirestoreCollection<State>
	private date_value: string
	private clocks_mas: Array<string>

	constructor(private actions$: Actions, 
				private db: AngularFirestore,
				private store$: Store<StateEffects>,
				private http: HttpClient) 
	{
		this.request_collection = db.collection<State>('requests')
		this.store$.pipe(select(selectDay)).subscribe(x => this.date_value = x)
		this.store$.pipe(select(selectClocks)).subscribe(x => this.clocks_mas = x)
	}

	@Effect({ dispatch: false }) add_request_to_firestore = this.actions$.pipe(
		ofType(RequestActionTypes.PUSH_REQUEST),
		map((action: RequestActions) => action.payload),
		map((payload: State): Observable<DocumentReference> => this.send_full_state_to_firestore(payload))
	)

	@Effect({ dispatch: false }) send_request_to_slack = this.actions$.pipe(
		ofType(RequestActionTypes.PUSH_REQUEST),
		map((action: RequestActions) => action.payload),
		map((request) => this.create_post_request_slack(request))
	)

	push_full_state_to_browser(payload) {
		const messaging = firebase.messaging()
		const postHeader = {
			headers: new HttpHeaders({ 
				'Content-Type': 'application/json',
				'Authorization': ''
			})
		}

		messaging.requestPermission()
			.then(() => {
				messaging.getToken()
					.then(res => {
						this.http.post(
							AppParametrs.FCMurl,
							this.create_browser_message(res),
							postHeader
						).subscribe( x => console.log('push_full_state_to_browser', x) )
					})
					.catch((err) => console.log('getToken', err))
			})
			.catch((err) => console.log('requestPermission', err))
	}

	create_browser_message(token){
		return {
			message: {
				token: token,
				notification: {
					body: 'FCM body',
					title: 'FCM title'
				}
			}
		}
	}

	send_full_state_to_firestore(payload) {
		return from(this.request_collection.add({ ...payload, date: this.date_value, clocks: this.clocks_mas }))
	}

	create_slack_message(request) {
		const clock_start = this.clocks_mas[0]
		const clock_end = this.clocks_mas[this.clocks_mas.length - 1]
		return `Клиент ${request.first_name} ${request.second_name} (${request.telephone}) забранировал(а) '${request.service_type}' ` +
			   `${this.date_value} c ${clock_start} по ${clock_end}. Детали брони тут 'типо ссылка'`
	}

	create_post_request_slack(request) {
		const postHeader = {
			headers: new HttpHeaders({ 'Content-Type':  'application/x-www-form-urlencoded' }),
			responseType: 'text' as 'text'
		}
		this.http.post(
			AppParametrs.slackWebhookURL,
			{ text: this.create_slack_message(request) },
			postHeader
		).subscribe( x => console.log('create_post_request_slack', x) )
	}
}






               
































