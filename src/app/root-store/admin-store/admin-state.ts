import { loginStatus } from '../../app.parametrs'

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
	requests: Array<RequestState>
}

export const initValue = {
	email: '',
	password: '',
	token: '',
	status: loginStatus.none,
	requests: []
}

export const name = 'admin'

export const initState: Statte = localStorage.getItem(name) != undefined ? JSON.parse(localStorage.getItem(name)) : initValue