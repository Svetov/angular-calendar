import { State } from './admin-state'

export const selectLoginPassword = (state: State) => ({email: state.email, password: state.password})

export const selectStatus = (state: State) => state.status