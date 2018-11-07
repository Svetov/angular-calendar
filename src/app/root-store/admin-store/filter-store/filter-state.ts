import { FirestoreState } from '../pagination-store/pagination-state'


export interface State {
	page: number,
	value: Array<object>,
	filter_length: number,
	filtered: Array<FirestoreState>
}

export const initState = {
	page: 0,
	value: [],
	filter_length: 0,
	filtered: []
}