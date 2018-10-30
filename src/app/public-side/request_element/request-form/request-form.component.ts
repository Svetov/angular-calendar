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

import { RequestService } from './request.service'


@Component({
	selector: 'app-request-form',
	templateUrl: './request-form.component.html',
	styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit, AfterViewInit {
	request_form = new FormGroup({
		first_name: 		new FormControl(''),
		second_name: 		new FormControl(''),
		telephone: 			new FormControl('', [
			Validators.pattern(this.requestService.get_reg_telephone)
		]),
		service_type: 		new FormControl(''),
		children_amount: 	new FormControl(''),
		adult_amount: 		new FormControl(''),
		table_type: 		new FormControl(''),
	})
	code_form = new FormControl('')
	herf_forward: string
	recaptchaVerifier: any
	code_form_flag: boolean

	constructor(private requestService: RequestService) {
		this.code_form_flag = false
		this.herf_forward = PublicPaths.successPath.path
	}

	ngOnInit() {
		this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('button-send-sms', { 'size': 'invisible' })
	}

	ngAfterViewInit() { }

	onGetCode() {
		this.requestService.get_code({...this.request_form.value}, this.recaptchaVerifier)
		this.code_form_flag = true
	}

	onSendCode() {
		this.requestService.send_code({...this.request_form.value}, this.code_form.value)
		this.code_form_flag = false
		/*
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
		*/
	}
}
