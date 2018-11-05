import { loginStatus } from '../../app.parametrs'
import { PaginationState } from './pagination-store'

export interface RequestState {
	first_name: string,
	second_name: string,
	telephone: string,
	service_type: string,
	children_amount: number,
	adult_amount: number,
	table_type: string,
	request_status: string,
	date: string,
	clocks: Array<string>
}

export interface State {
	email: string,
	password: string,
	token: string,
	status: string,
	pagination: PaginationState.State
}

export const initValue = {
	email: '',
	password: '',
	token: '',
	status: loginStatus.none,
	pagination: PaginationState.initState
}

export const name = 'admin'

export const initState: State = localStorage.getItem(name) != undefined ? JSON.parse(localStorage.getItem(name)) : initValue