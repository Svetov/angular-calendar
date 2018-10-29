import { Component, OnInit, AfterViewInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

import * as firebase from 'firebase/app'

import { Store } from '@ngrx/store'

import { PublicPaths } from '../../public-side.path'
import { RootState, RequestActions } from '../../../root-store'
import * as request from 'request'

import { HttpClient, HttpHeaders } from '@angular/common/http'




@Component({
	selector: 'app-request-form',
	templateUrl: './request-form.component.html',
	styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit, AfterViewInit {
	private reg_telephone = /\+\d\s\d{3}-\d{3}-\d{4}/i

	private comfirm_status: boolean
	private confirmationResult: any
	private recaptchaVerifier: any

	private request_form = new FormGroup({
		first_name: 		new FormControl(''),
		second_name: 		new FormControl(''),
		telephone: 			new FormControl('', [
			Validators.pattern(/\+\d\s\d{3}-\d{3}-\d{4}/i)
		]),
		service_type: 		new FormControl(''),
		children_amount: 	new FormControl(''),
		adult_amount: 		new FormControl(''),
		table_type: 		new FormControl(''),
	})

	private code_form = new FormControl('')

	private herf_forward: string


	constructor(private store: Store<RootState.State>, 
				private ngAuth: AngularFireAuth, 
				private http: HttpClient) {
		this.comfirm_status = false
		this.herf_forward = PublicPaths.successPath.path
	}

	ngOnInit() {}

	ngAfterViewInit() {
		this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('button-send-sms', {'size': 'invisible'})
	}

	onGetCode() {
		const form_value = {...this.request_form.value};

		/*
		if (this.reg_telephone.test(form_value.telephone)) {
			this.ngAuth.auth.signInWithPhoneNumber('+7 989-702-6426', this.recaptchaVerifier)
				.then(confirmationResult => {
					this.comfirm_status = true
					this.confirmationResult = confirmationResult
				})
				.catch(x => console.log('signInWithPhoneNumber', x))
		}*/
		this.comfirm_status = true
	}

	onSendCode() {
		const form_value = {...this.request_form.value};
		form_value.adult_amount = parseInt(form_value.adult_amount) || 0
		form_value.children_amount = parseInt(form_value.children_amount) || 0
		form_value['request_status'] = 'status_1'

		this.store.dispatch( new RequestActions.pushRequest(form_value) )

		const first_name = form_value.first_name
		const text_string = `Клиент ${first_name} приехал на разборки`

		const l = JSON.stringify({"text": text_string})
		const r = `payload=${l}`
		const postHeader = {
			headers: new HttpHeaders({
				'Content-Type':  'application/x-www-form-urlencoded'
			})
		}
		this.http.post(
			"https://hooks.slack.com/services/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",
			r,
			postHeader
		).subscribe(
			x => console.log(1, x),
			x => console.log(2, x)
		)
		//request.post(
		//	"https://hooks.slack.com/services/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",
		//	{ 'json': { 'text': '123' } }
		//)
		

		/*
		this.confirmationResult.confirm(this.code_form.value)
			.then(result => {
				this.store.dispatch( new RequestActions.pushRequest(form_value) )
			})
			.catch(x => console.log('confirmationResult', x))
		*/
	}
}
