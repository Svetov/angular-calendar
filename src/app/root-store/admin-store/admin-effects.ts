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
import { AdminActionTypes, 
		 AdminTypes, 
		 loginFirebaseSuccess, 
		 loginFirebaseFail,
		 logOutSuccess,
		 logOutFail } from './admin-action'
import { AngularFireAuth } from '@angular/fire/auth'
import { loginStatus } from '../../app.parametrs'
import { Router } from '@angular/router'
import { PrivatePaths } from '../../private-side/private-side.path'

@Injectable()
export class AdminEffect {
	private request_collection: AngularFirestoreCollection<State>
	private date_value: string
	private clocks_mas: Array<string>

	constructor(private actions$: Actions, 
				private firestore: AngularFirestore,
				private http: HttpClient,
				private ng_auth: AngularFireAuth,
				private router: Router) 
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
		switchMap((payload: {email: string, password: string}) =>
			from(this.ng_auth.auth.signInWithEmailAndPassword(payload.email, payload.password)
				.then( res => new loginFirebaseSuccess({status: loginStatus.success}) )
				.catch( err => new loginFirebaseFail({status: loginStatus.fail}) )
			)
		)
	)

	@Effect({ dispatch: false }) login_firebase_success = this.actions$.pipe(
		ofType(AdminActionTypes.CHANGE_LOGIN_PASSWORD_SUCCESS),
		map(action => this.router.navigate([PrivatePaths.successPath.path]))
	)

	// Ассинхронный action начала logout админа
	@Effect() logout_start = this.actions$.pipe(
		ofType(AdminActionTypes.LOG_OUT_START),
		map((action: AdminTypes) => action.payload),
		switchMap((payload: {status: string}) =>
			from(this.ng_auth.auth.signOut()
				.then( res => new logOutSuccess({status: loginStatus.none}) )
				.catch( err => new logOutFail({status: loginStatus.success}) )
			)
		)
	)

	// Переход на страницу login при успешном logout
	@Effect({ dispatch: false }) logout_success = this.actions$.pipe(
		ofType(AdminActionTypes.LOG_OUT_SUCCESS),
		map(action => this.router.navigate([PrivatePaths.loginPath.path]))
	)
}












