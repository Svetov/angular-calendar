import { Action } from '@ngrx/store'


export enum RequestActionTypes {
	PUSH_REQUEST = 'PUSH_REQUEST',
	CHANGE_STATUS = 'CHANGE_STATUS',
}

export class pushRequest implements Action {
	readonly type =  RequestActionTypes.PUSH_REQUEST
	constructor(public payload: { 
		first_name: string,
		second_name: string,
		telephone: string,
		service_type: string,
		children_amount: number,
		adult_amount: number,
		table_type: string,
		request_status: string
	}) {}
}

export class changeStatus implements Action {
	readonly type =  RequestActionTypes.CHANGE_STATUS
	constructor(public payload: { 
		request_status: string
	}) {}
}


export type RequestActions = pushRequest | changeStatus