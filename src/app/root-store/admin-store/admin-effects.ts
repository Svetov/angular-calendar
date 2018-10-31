import { Injectable } from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects'
import { Action, select } from '@ngrx/store'
import { Observable, from } from 'rxjs'
import { map, mapTo, mergeMap, switchMap, catchError, tap, withLatestFrom, take } from 'rxjs/operators'
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore'
import { Store } from '@ngrx/store'
import { HttpHeaders, HttpClient } from '@angular/common/http'
import * as AppParametrs from '../../app.parametrs'
import { State } from './admin-state'
import { AdminActionTypes, AdminTypes, loginFirebaseSuccess, loginFirebaseFail } from './admin-action'
import { AngularFireAuth } from '@angular/fire/auth'
import { loginStatus } from '../../app.parametrs'

@Injectable()
export class AdminEffect {
	private request_collection: AngularFirestoreCollection<State>
	private date_value: string
	private clocks_mas: Array<string>

	constructor(private actions$: Actions, 
				private firestore: AngularFirestore,
				private http: HttpClient,
				private ng_auth: AngularFireAuth) 
	{
		this.request_collection = this.firestore.collection<State>('requests')
	}

	@Effect({ dispatch: false }) send_token_to_firestore = this.actions$.pipe(
		ofType(AdminActionTypes.CHANGE_TOKEN),
		map((action: AdminTypes) => action.payload),
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

	@Effect() login_firebase = this.actions$.pipe(
		ofType(AdminActionTypes.CHANGE_LOGIN_PASSWORD),
		map((action: AdminTypes) => action.payload),
		tap(payload => console.log(payload)),
		switchMap(payload =>
			from(this.ng_auth.auth.signInWithEmailAndPassword(payload.email, payload.password)
				.then( res => new loginFirebaseSuccess({status: loginStatus.success}) )
				.catch( err => new loginFirebaseFail({status: loginStatus.fail}) )
			)
		)
	)
}