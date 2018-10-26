import { RequestActionTypes, RequestActions } from './request-action'
import { State, initState } from './request-state'

export function RequestReducer(state: State = initState, action: RequestActions): State {
	switch (action.type) {
		case RequestActionTypes.PUSH_REQUEST:
			return {
				...state,
				first_name: 		action.payload.first_name,
				second_name: 		action.payload.second_name,
				telephone: 			action.payload.telephone,
				service_type: 		action.payload.service_type,
				children_amount: 	action.payload.children_amount,
				adult_amount: 		action.payload.adult_amount,
				table_type: 		action.payload.table_type,
				request_status: 	action.payload.request_status
			}

		case RequestActionTypes.CHANGE_STATUS:
			return {
				...state,
				request_status: action.payload.request_status
			}

		default:
			return state
	}
}