import { State } from './admin-state'

export const selectLoginPassword = (state: State) => ({email: state.email, password: state.password})

export const selectStatus = (state: State) => state.status

export const selectRequestsLength = (state: State) => state.pagination.requests_length

export const selectPage = (state: State) => state.pagination.page

export const selectPageRequests = (state: State) => state.pagination.requests