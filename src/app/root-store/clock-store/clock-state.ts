export interface State {
	clocks: Array<string>
}

export const initValue: State = {
	clocks: []
}

export const name = 'clock'

export const initState: Statte = localStorage.getItem(name) != undefined ? JSON.parse(localStorage.getItem(name)) : initValue