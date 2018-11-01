export interface State {
	first_name: string,
	second_name: string,
	telephone: string,
	service_type: string,
	children_amount: number,
	adult_amount: number,
	table_type: string,
	request_status: string
}

export const initValue = {
	first_name: "none",
	second_name: "none",
	telephone: "none",
	service_type: "none",
	children_amount: 0,
	adult_amount: 0,
	table_type: "none",
	request_status: "none"
}

export const name = 'request'

export const initState: Statte = localStorage.getItem(name) != undefined ? JSON.parse(localStorage.getItem(name)) : initValue