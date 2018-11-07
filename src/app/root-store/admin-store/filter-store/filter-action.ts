import { Action } from '@ngrx/store'


export enum FilterActionType {
	CHANGE_VALUE = 'CHANGE_VALUE',
	CHANGE_FIRESTORE_VALUE_START = 'CHANGE_FIRESTORE_VALUE_START',
	CHANGE_FIRESTORE_VALUE_SUCCESS = 'CHANGE_FIRESTORE_VALUE_SUCCESS',
	CHANGE_FIRESTORE_VALUE_FAIL = 'CHANGE_FIRESTORE_VALUE_FAIL'
}

export class changeFirestoreValueSuccess implements Action {
	readonly type = FilterActionType.CHANGE_FIRESTORE_VALUE_SUCCESS
	constructor(public payload: {
		filtered: any
	}) {}
}

export class changeFirestoreValueFail implements Action {
	readonly type = FilterActionType.CHANGE_FIRESTORE_VALUE_FAIL
	constructor(public payload: {
		filtered: any
	}) {}
}

export class changeFirestoreValueStart implements Action {
	readonly type = FilterActionType.CHANGE_FIRESTORE_VALUE_START
	constructor(public payload: {
		filtered: any
	}) {}
}

export class changeValue implements Action {
	readonly type = FilterActionType.CHANGE_VALUE
	constructor(public payload: {
		value: Array<object>
	}) {}
}

export type FilterAction = changeValue |
						   changeFirestoreValueStart | 
						   changeFirestoreValueFail | 
						   changeFirestoreValueSuccess