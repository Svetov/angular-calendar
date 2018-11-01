import { localStorageSync } from 'ngrx-store-localstorage'
import { FirestoreState } from './firestore'
import { ClockState } from './clock-store'
import { RequestState } from './request-store'
import { AdminState } from './admin-store'
import { CalendarState } from './calendar-store'


function getLocalStorageSyncReducer(reducers_names) {
	return (reducer) => localStorageSync({keys: [reducers_names]})(reducer)
}

const reducersName = [
	ClockState.name,
	RequestState.name,
	AdminState.name,
	CalendarState.name
]

export const metaReducers = reducersName.map(name => getLocalStorageSyncReducer(name))