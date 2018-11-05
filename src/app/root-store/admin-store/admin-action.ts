import { State, RequestState } from './admin-state'
import { Action } from '@ngrx/store'

export enum AdminActionTypes {
	CHANGE_LOGIN_PASSWORD = 'CHANGE_LOGIN_PASSWORD',
	CHANGE_LOGIN_PASSWORD_SUCCESS = 'CHANGE_LOGIN_PASSWORD_SUCCESS',
	CHANGE_LOGIN_PASSWORD_FAIL = 'CHANGE_LOGIN_PASSWORD_FAIL',
	CHANGE_TOKEN = 'CHANGE_TOKEN',
	LOG_OUT_START = 'LOG_OUT_START',
	LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS',
	LOG_OUT_FAIL = 'LOG_OUT_FAIL',
	GET_REQUESTS_START = 'GET_REQUESTS_START',
	GET_REQUESTS_SUCCESS = 'GET_REQUESTS_SUCCESS',
	GET_REQUESTS_FAIL = 'GET_REQUESTS_FAIL'
}

export class getRequestsFail implements Action {
	readonly type = AdminActionTypes.GET_REQUESTS_FAIL
	constructor(public payload: {
		requests: any 
	}) {}
}

export class getRequestsSuccess implements Action {
	readonly type = AdminActionTypes.GET_REQUESTS_SUCCESS
	constructor(public payload: {
		requests: Array<RequestState>
	}) {}
}

export class getRequestsStart implements Action {
	readonly type = AdminActionTypes.GET_REQUESTS_START
	constructor(public payload: {
		requests: any
	}) {}
}

export class loginFirebaseSuccess implements Action {
	readonly type = AdminActionTypes.CHANGE_LOGIN_PASSWORD_SUCCESS
	constructor(public payload: {
		status: string
	}) {}
}

export class loginFirebaseFail implements Action {
	readonly type = AdminActionTypes.CHANGE_LOGIN_PASSWORD_FAIL
	constructor(public payload: {
		status: string
	}) {}
}

export class loginFirebase implements Action {
	readonly type = AdminActionTypes.CHANGE_LOGIN_PASSWORD
	constructor(public payload: {
		email: string,
		password: string
	}) {}
}

export class changeToken implements Action {
	readonly type = AdminActionTypes.CHANGE_TOKEN
	constructor(public payload: {
		token: string
	}) {}
}

export class logOutStart implements Action {
	readonly type = AdminActionTypes.LOG_OUT_START
	constructor(public payload: {
		status: string
	}) {}
}

export class logOutSuccess implements Action {
	readonly type = AdminActionTypes.LOG_OUT_SUCCESS
	constructor(public payload: {
		status: string
	}) {}
}

export class logOutFail implements Action {
	readonly type = AdminActionTypes.LOG_OUT_FAIL
	constructor(public payload: {
		status: string
	}) {}
}

export type AdminTypes = loginFirebase | 
						 changeToken | 
						 loginFirebaseSuccess | 
						 loginFirebaseFail | 
						 logOutStart | 
						 logOutSuccess |
						 logOutFail |
						 getRequestsFail |
						 getRequestsSuccess |
						 getRequestsStart















