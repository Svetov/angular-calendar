import { loginStatus } from '../../app.parametrs'

export interface State {
	email: string,
	password: string,
	token: string,
	status: string
}

export const initValue = {
	email: '',
	password: '',
	token: '',
	status: loginStatus.none
}

export const name = 'admin'

export const initState: Statte = localStorage.getItem(name) != undefined ? JSON.parse(localStorage.getItem(name)) : initValue