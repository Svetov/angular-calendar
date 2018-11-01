export interface State {
	documents: Array<object>
}

export const initValue = {
	documents: []
}

export const name = 'firestore'

export const initState: Statte = localStorage.getItem(name) != undefined ? JSON.parse(localStorage.getItem(name)) : initValue