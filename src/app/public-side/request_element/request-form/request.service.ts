import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { RootState, RequestActions } from '../../../root-store'
import { AngularFireAuth } from '@angular/fire/auth'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { requestStatus } from '../../../app.parametrs'

@Injectable()
export class RequestService {
	private reg_telephone = /\+\d\s\d{3}-\d{3}-\d{4}/i
	get get_reg_telephone() { return this.reg_telephone } 

	private confirmationResult: any

	constructor(private store: Store<RootState.State>, 
				private ngAuth: AngularFireAuth, 
				private http: HttpClient) { }

	get_code(form_value, recaptchaVerifier) {
		//if (this.reg_telephone.test(form_value.telephone)) {
		//	this.ngAuth.auth.signInWithPhoneNumber(form_value.telephone, recaptchaVerifier)
		//this.ngAuth.auth.signInWithPhoneNumber('+7 989-702-6426', recaptchaVerifier)
		//	.then(confirmationResult => {
		//		this.confirmationResult = confirmationResult
		//	})
		//	.catch(x => console.log('signInWithPhoneNumber', x))
		//}
	}

	send_code(form_value, code_form) {
		form_value.adult_amount = parseInt(form_value.adult_amount) || 0
		form_value.children_amount = parseInt(form_value.children_amount) || 0
		form_value['request_status'] = requestStatus.stage_0

		//this.confirmationResult.confirm(code_form)
		//	.then(result => {
		//		this.store.dispatch( new RequestActions.pushRequest(form_value) )
		//	})
		//	.catch(x => console.log('confirmationResult', x))
		this.store.dispatch( new RequestActions.pushRequest(form_value) )
	}
}
