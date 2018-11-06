export const SLACK_WEBHOOK_URL = "https://hooks.slack.com/services/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"

export const REQUEST_STATUS = {
	NOT_PROCESSED: 'Не обработан',
	DISMISS: 'Откланено'
}

export const FCM_TOKEN = 'BEreVi-TnhyhQRGUTsONjMo_z7rcpcAcUxEUcX88U_bXxNUnTVllQoCGbXuazbB0ONenwkJvuhPsC1xkgwSpUc8'

export const FCM_URL = 'https://fcm.googleapis.com/v1/projects/myproject-b5ae1/messages:send'

export const LOGIN_STATUS = {
	NONE: 'none',
	SUCCESS: 'success',
	FAIL: 'fail'
}

export const PAGE_SIZE = 9

export const CLOCKS_RANGE = [ '09:00', '10:00', '11:00', 
							  '12:00', '13:00', '14:00', 
							  '15:00', '16:00','17:00', 
							  '18:00', '19:00', '20:00', 
							  '21:00', '22:00' ]

export const SERVICE_TYPE = [
	'Крещение',
	'Свадьба',
	'Похороны'
]

export const TABLE_TYPE = [
	'Распределенные столы',
	'Центральный стол',
	'Круговой стол'
]

export const FIRST_NAME_MIN = 2
export const FIRST_NAME_MAX = 15
export const FIRST_NAME_REG = /^[а-я]+$/i

export const SECOND_NAME_MIN = 2
export const SECOND_NAME_MAX = 15
export const SECOND_NAME_REG = /^[а-я]+$/i

export const TELEPHONE_MIN = 15
export const TELEPHONE_MAX = 15
export const TELEPHONE_REG = /^\+\d{1}\s\d{3}-\d{3}-\d{4}$/

export const CHILDREN_AMOUNT_MIN = 0
export const CHILDREN_AMOUNT_MAX = 20

export const ADULT_AMOUNT_MIN = 0
export const ADULT_AMOUNT_MAX = 20
