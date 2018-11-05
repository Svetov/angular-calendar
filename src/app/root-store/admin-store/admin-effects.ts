import { Injectable } from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects'
import { Action, select } from '@ngrx/store'
import { Observable, from } from 'rxjs'
import { map, mapTo, mergeMap, switchMap, catchError, tap, withLatestFrom, take } from 'rxjs/operators'
import { AngularFirestore, 
		 AngularFirestoreCollection,
		 AngularFirestoreDocument,
		 DocumentReference } from '@angular/fire/firestore'
import { Store } from '@ngrx/store'
import { HttpHeaders, HttpClient } from '@angular/common/http'
import * as AppParametrs from '../../app.parametrs'
import { State } from './admin-state'
import { AdminActionTypes, 
		 AdminTypes, 
		 loginFirebaseSuccess, 
		 loginFirebaseFail,
		 logOutSuccess,
		 logOutFail,
		 getRequestsStart,
		 getRequestsFail,
		 getRequestsSuccess } from './admin-action'
import { AngularFireAuth } from '@angular/fire/auth'
import { LOGIN_STATUS } from '../../app.parametrs'
import { Router } from '@angular/router'
import { PrivatePaths } from '../../private-side/private-side.path'
import { PaginationState, PaginationAction } from './pagination-store'
import { PAGE_SIZE } from '../../app.parametrs'
import { RootState, RootSelectors } from '../../root-store'


@Injectable()
export class AdminEffect {
	private request_id: AngularFirestoreDocument<any>
	private requests_length: AngularFirestoreDocument<any>
	private requests_collection: AngularFirestoreCollection<PaginationState.FirestoreState>
	private date_value: string
	private clocks_mas: Array<string>
	private first: string

	constructor(private actions$: Actions, 
				private firestore: AngularFirestore,
				private http: HttpClient,
				private ng_auth: AngularFireAuth,
				private router: Router,
				private store$: Store<RootState.State>) 
	{
		this.requests_collection = this.firestore.collection('requests')
		this.request_id = this.firestore.collection('system').doc('requests_id')
		this.requests_length = this.firestore.collection('system').doc('requests_id')
	}

	// Получение пагинированых requests
	@Effect() get_page = this.actions$.pipe(
		ofType(PaginationAction.PaginationActionType.GET_PAGE_START),
		switchMap(action => this.store$.pipe(
				select(RootSelectors.selectPage),
				switchMap(page => this.request_id.valueChanges().pipe(
						map(requests_id_mas => requests_id_mas[page * PAGE_SIZE]),
						switchMap(id => this.requests_collection.valueChanges().pipe(
								map(res => res.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)),
								map(page_res => new PaginationAction.GetPageSuccess({ requests: page_res }))
							)
						)
					)
				)
			)
		)
	)

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
				.then( res => new loginFirebaseSuccess({status: LOGIN_STATUS.SUCCESS}) )
				.catch( err => new loginFirebaseFail({status: LOGIN_STATUS.FAIL}) )
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
				.then( res => new logOutSuccess({status: LOGIN_STATUS.NONE}) )
				.catch( err => new logOutFail({status: LOGIN_STATUS.SUCCESS}) )
			)
		)
	)

	// Переход на страницу login при успешном logout
	@Effect({ dispatch: false }) logout_success = this.actions$.pipe(
		ofType(AdminActionTypes.LOG_OUT_SUCCESS),
		map(action => this.router.navigate([PrivatePaths.loginPath.path]))
	)

	// Получение длины списка requests
	@Effect() get_requests_length = this.actions$.pipe(
		ofType(PaginationAction.PaginationActionType.GET_REQUESTS_LENGTH),
		switchMap(action => from(this.requests_length.valueChanges().pipe(
				map(res => new PaginationAction.ChangeRequestLength({ requests_length: res.value.length }))
			))
		)
	)

	// Цепочка action для старта получения пагинированной страницы после изменения page
	@Effect() change_page = this.actions$.pipe(
		ofType(PaginationAction.PaginationActionType.CHANGE_PAGE),
		map(() => new PaginationAction.GetPageStart())
	)
}