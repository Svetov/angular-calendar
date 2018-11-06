import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { RootState, RequestActions } from '../../../root-store'
import { AngularFireAuth } from '@angular/fire/auth'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { REQUEST_STATUS } from '../../../app.parametrs'

@Injectable()
export class RequestService {
	private confirmationResult: any

	constructor(private store: Store<RootState.State>, 
				private ngAuth: AngularFireAuth, 
				private http: HttpClient) { }

	send_code(form_value, code_form) {
		form_value.adult_amount = parseInt(form_value.adult_amount) || 0
		form_value.children_amount = parseInt(form_value.children_amount) || 0
		form_value['request_status'] = REQUEST_STATUS.NOT_PROCESSED

		/*
		this.confirmationResult.confirm(code_form)
			.then(result => {
				this.store.dispatch( new RequestActions.pushRequest(form_value) )
			})
			.catch(x => console.log('confirmationResult', x))
		*/
		this.store.dispatch( new RequestActions.pushRequest(form_value) )
	}

	get_code(form_value, recaptchaVerifier) {
		this.ngAuth.auth.signInWithPhoneNumber(form_value.telephone, recaptchaVerifier)
			.then(confirmationResult => {
				this.confirmationResult = confirmationResult
			})
			.catch(x => console.log('signInWithPhoneNumber', x))
	}
}
