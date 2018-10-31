import { State } from './admin-state'
import { Action } from '@ngrx/store'

export enum AdminActionTypes {
	CHANGE_LOGIN_PASSWORD = 'CHANGE_LOGIN_PASSWORD',
	CHANGE_LOGIN_PASSWORD_SUCCESS = 'CHANGE_LOGIN_PASSWORD_SUCCESS',
	CHANGE_LOGIN_PASSWORD_FAIL = 'CHANGE_LOGIN_PASSWORD_FAIL',
	CHANGE_TOKEN = 'CHANGE_TOKEN'
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

export type AdminTypes = loginFirebase | changeToken | loginFirebaseSuccess | loginFirebaseFail