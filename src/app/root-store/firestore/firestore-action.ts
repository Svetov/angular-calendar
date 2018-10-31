import { Action } from '@ngrx/store'
import { State } from './firestore-state'

export enum FirestoreActionTypes {
	GET_FIRESTORE_REQUEST_START = 'GET_FIRESTORE_REQUEST_START',
	GET_FIRESTORE_REQUEST_SUCCESS = 'GET_FIRESTORE_REQUEST_SUCCESS',
	GET_FIRESTORE_REQUEST_FAIL = 'GET_FIRESTORE_REQUEST_FAIL',
}


export class getFirestoreRequestStart implements Action {
	readonly type = FirestoreActionTypes.GET_FIRESTORE_REQUEST_START
	constructor(public payload: {
		documents: Array<object>
	}) {}
}

export class getFirestoreRequestSuccess implements Action {
	readonly type = FirestoreActionTypes.GET_FIRESTORE_REQUEST_SUCCESS
	constructor(public payload: {
		documents: Array<object>
	}) {}
}

export class getFirestoreRequestFail implements Action {
	readonly type = FirestoreActionTypes.GET_FIRESTORE_REQUEST_FAIL
	constructor(public payload: {
		documents: Array<object>
	}) {}
}

export type FirestoreActions = getFirestoreRequestStart | getFirestoreRequestSuccess | getFirestoreRequestFail