import { FirestoreActions, FirestoreActionTypes } from './firestore-action'
import { State, initState } from './firestore-state'
import { Action } from '@ngrx/store'

export function FirestoreReducer(state: State = initState, action: FirestoreActions ) {
	switch (action.type) {
		case FirestoreActionTypes.GET_FIRESTORE_REQUEST_START:
			return state

		case FirestoreActionTypes.GET_FIRESTORE_REQUEST_SUCCESS:
			return {
				...state,
				documents: action.payload.documents
			}

		case FirestoreActionTypes.GET_FIRESTORE_REQUEST_FAIL:
			return state

		case FirestoreActionTypes.CHANGE_TOKEN:
			return {
				...state,
				token: action.payload.token
			}

		default:
			return state
	}
} 