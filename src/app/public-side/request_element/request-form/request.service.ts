import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { RootState, RequestActions } from '../../../root-store'
import { AngularFireAuth } from '@angular/fire/auth'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { REQUEST_STATUS } from '../../../app.parametrs'

@Injectable()
export class RequestService {
	private reg_telephone = /\+\d\s\d{3}-\d{3}-\d{4}/i
	get get_reg_telephone() { return this.reg_telephone } 

	private confirmationResult: any

	constructor(private store: Store<RootState.State>, 
				private ngAuth: AngularFireAuth, 
				private http: HttpClient) { }

	send_code(form_value, code_form) {
		form_value.adult_amount = parseInt(form_value.adult_amount) || 0
		form_value.children_amount = parseInt(form_value.children_amount) || 0
		form_value['request_status'] = REQUEST_STATUS.NOT_PROCESSED

		this.store.dispatch( new RequestActions.pushRequest(form_value) )
	}
}
