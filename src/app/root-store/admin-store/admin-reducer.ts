import { State, initState } from './admin-state'
import { AdminActionTypes, AdminTypes } from './admin-action'
import { PaginationAction } from './pagination-store'
import { FilterAction } from './filter-store'


export function AdminReducer(state: State = initState, action: AdminTypes | 
															   PaginationAction.PaginationAction |
															   FilterAction.FilterAction) 
{
	switch (action.type) {

		case FilterAction.FilterActionType.CHANGE_FIRESTORE_VALUE_START:
			return {
				...state
			}

		case FilterAction.FilterActionType.CHANGE_FIRESTORE_VALUE_FAIL:
			return {
				...state
			}

		case FilterAction.FilterActionType.CHANGE_FIRESTORE_VALUE_SUCCESS:
			return {
				...state,
				filter: {
					...state.filter,
					filtered: action.payload.filtered
				}
			}

		case FilterAction.FilterActionType.CHANGE_VALUE:
			return {
				...state,
				filter: {
					...state.filter,
					value: action.payload.value
				}
			}

		case PaginationAction.PaginationActionType.GET_REQUESTS_LENGTH:
			return {
				...state
			}

		case PaginationAction.PaginationActionType.GET_PAGE_START:
			return {
				...state
			}

		case PaginationAction.PaginationActionType.GET_PAGE_FAIL:
			return {
				...state
			}

		case PaginationAction.PaginationActionType.GET_PAGE_SUCCESS:
			return {
				...state,
				pagination: {
					...state.pagination,
					requests: action.payload.requests
				}
			}

		case PaginationAction.PaginationActionType.CHANGE_REQUESTS_LENGTH:
			return {
				...state,
				pagination: {
					...state.pagination,
					requests_length: action.payload.requests_length
				}
			}

		case PaginationAction.PaginationActionType.CHANGE_PAGE:
			return {
				...state,
				pagination: {
					...state.pagination,
					page: action.payload.page
				}
			}

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

		case AdminActionTypes.GET_REQUESTS_START:
			return {
				...state
			}

		case AdminActionTypes.GET_REQUESTS_FAIL:
			return {
				...state
			}

		case AdminActionTypes.GET_REQUESTS_SUCCESS:
			return {
				...state,
				requests: action.payload.requests
			}

		default:
			return state
	}
}