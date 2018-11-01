import { State, initState } from './admin-state'
import { AdminActionTypes, AdminTypes } from './admin-action'

export function AdminReducer(state: State = initState, action: AdminTypes) {
	switch (action.type) {
		case AdminActionTypes.CHANGE_LOGIN_PASSWORD:
			return {
				...state,
				email: action.payload.email,
				password: action.payload.password
			}

		case AdminActionTypes.CHANGE_TOKEN:
			return {
				...state,
				token: action.payload.token
			}

		case AdminActionTypes.CHANGE_LOGIN_PASSWORD_SUCCESS:
			return {
				...state,
				status: action.payload.status
			}
			
		case AdminActionTypes.CHANGE_LOGIN_PASSWORD_FAIL:
			return {
				...state,
				status: action.payload.status
			}	

		case AdminActionTypes.LOG_OUT_START:
			return {
				...state,
				status: action.payload.status
			}

		case AdminActionTypes.LOG_OUT_SUCCESS:
			return {
				...state,
				status: action.payload.status
			}

		case AdminActionTypes.LOG_OUT_FAIL:
			return {
				...state,
				status: action.payload.status
			}

		default:
			return state
	}
}