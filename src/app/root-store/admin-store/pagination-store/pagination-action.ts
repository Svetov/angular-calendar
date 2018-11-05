import { FirestoreState } from './pagination-state'
import { Action } from '@ngrx/store'


export enum PaginationActionType {
	CHANGE_PAGE = 'CHANGE_PAGE',
	CHANGE_REQUESTS_LENGTH = 'CHANGE_REQUESTS_LENGTH',
	GET_REQUESTS_LENGTH = 'GET_REQUESTS_LENGTH',
	GET_PAGE_START = 'GET_PAGE_START',
	GET_PAGE_FAIL = 'GET_PAGE_FAIL',
	GET_PAGE_SUCCESS = 'GET_PAGE_SUCCESS'
}

export class ChangePage implements Action {
	readonly type = PaginationActionType.CHANGE_PAGE
	constructor(public payload: {
		page: number
	}) {}
}

export class ChangeRequestLength implements Action {
	readonly type = PaginationActionType.CHANGE_REQUESTS_LENGTH
	constructor(public payload: {
		requests_length: any
	}) {}	
}

export class GetRequestsLength implements Action {
	readonly type = PaginationActionType.GET_REQUESTS_LENGTH
	constructor() {}
}

export class GetPageStart implements Action {
	readonly type = PaginationActionType.GET_PAGE_START
	constructor() {}
}

export class GetPageFail implements Action {
	readonly type = PaginationActionType.GET_PAGE_FAIL
	constructor() {}
}

export class GetPageSuccess implements Action {
	readonly type = PaginationActionType.GET_PAGE_SUCCESS
	constructor(public payload: {
		requests: Array<FirestoreState>
	}) {}
}

export type PaginationAction = ChangePage |
							   ChangeRequestLength |
							   GetRequestsLength |
							   GetPageStart |
							   GetPageFail |
							   GetPageSuccess