import { loginStatus } from '../../app.parametrs'

export interface State {
	email: string,
	password: string,
	token: string,
	status: string
}

export const initState = {
	email: '',
	password: '',
	token: '',
	status: loginStatus.none
}