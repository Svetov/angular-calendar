import { Injectable } from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects'
import { Action, select } from '@ngrx/store'
import { Observable, from } from 'rxjs'
import { map, mapTo, mergeMap, switchMap, catchError, tap, withLatestFrom } from 'rxjs/operators'
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore'
import { Store } from '@ngrx/store'
import { HttpHeaders, HttpClient } from '@angular/common/http'
import * as AppParametrs from '../../app.parametrs'
import { State } from './firestore-state'
import { FirestoreActionTypes, getFirestoreRequestSuccess, FirestoreActions } from './firestore-action'

@Injectable()
export class FirestoreEffect {
	private request_collection: AngularFirestoreCollection<State>
	private date_value: string
	private clocks_mas: Array<string>

	constructor(private actions$: Actions, 
				private firestore: AngularFirestore,
				private http: HttpClient) 
	{
		this.request_collection = this.firestore.collection<State>('requests')
	}

	@Effect() get_firestore_reguests = this.actions$.pipe(
		ofType(FirestoreActionTypes.GET_FIRESTORE_REQUEST_START),
		switchMap( x => from(this.request_collection.valueChanges()).pipe(
			map((x) => new getFirestoreRequestSuccess({ documents: x }))
		))
	)

	@Effect({ dispatch: false }) send_token_to_firestore = this.actions$.pipe(
		ofType(FirestoreActionTypes.CHANGE_TOKEN),
		map((action: FirestoreActions) => action.payload),
		map((payload: State): void => this.send_token(payload))
	)

	send_token(payload) {
		const token_ref = this.firestore.collection('admin').doc('token')
		token_ref.update({ value: payload.token })
			.then(() => {
				console.log('Success update')
			})
			.catch(err => {
				console.log('Error update')
			})
	}
}
