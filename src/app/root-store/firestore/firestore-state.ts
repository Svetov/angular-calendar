export interface State {
	documents: Array<object>,
	token: string
}

export const initState = {
	documents: [],
	token: ""
}