export interface FirestoreState {
	first_name: string,
	second_name: string,
	telephone: string,
	service_type: string,
	children_amount: number,
	adult_amount: number,
	table_type: string,
	request_status: string,
	date: string,
	clocks: Array<string>
}

export const FirestoreStateInit = {
	first_name: 'Василий',
	second_name: 'Иванов',
	telephone: '+7 123-456-7890',
	service_type: 'Свадьба',
	children_amount: 10,
	adult_amount: 12,
	table_type: 'Обший',
	request_status: 'Не обработан',
	date: '01.01.1917',
	clocks: ['13:00', '21:00']
}

export interface State {
	page: number,
	requests_length: number,
	requests: Array<FirestoreState>
}

export const initState: State = {
	page: 0,
	requests_length: 0,
	requests: []
}

export const name = 'pagination'
