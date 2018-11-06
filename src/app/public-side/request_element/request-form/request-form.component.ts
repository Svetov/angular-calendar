import { Component, 
		 OnInit, 
		 AfterViewInit } from '@angular/core'
import { FormGroup, 
		 FormControl, 
		 Validators } from '@angular/forms'
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs'
import { catchError, 
		 tap } from 'rxjs/operators'
import * as firebase from 'firebase/app'
import { Store } from '@ngrx/store'
import { PublicPaths } from '../../public-side.path'
import { RootState, 
		 RequestActions } from '../../../root-store'
import * as request from 'request'
import { HttpClient, 
		 HttpHeaders } from '@angular/common/http'
import { RequestService } from './request.service'
import { SERVICE_TYPE,
		 CHILDREN_AMOUNT_MIN,
		 CHILDREN_AMOUNT_MAX,
		 ADULT_AMOUNT_MIN,
		 ADULT_AMOUNT_MAX,
		 TABLE_TYPE,
		 TELEPHONE_MIN,
		 TELEPHONE_MAX,
		 TELEPHONE_REG,
		 SECOND_NAME_REG,
		 SECOND_NAME_MAX,
		 SECOND_NAME_MIN,
		 FIRST_NAME_REG,
		 FIRST_NAME_MAX,
		 FIRST_NAME_MIN } from '../../../app.parametrs'


@Component({
	selector: 'app-request-form',
	templateUrl: './request-form.component.html',
	styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit, AfterViewInit {
	first_name: FormControl
	second_name: FormControl
	telephone: FormControl
	service_type: FormControl
	children_amount: FormControl
	adult_amount: FormControl
	table_type: FormControl
	request_form: FormGroup

	code_form = new FormControl('')
	herf_forward: string
	recaptchaVerifier: any
	code_form_flag: boolean
	service_type_option: Array<string> = SERVICE_TYPE
	table_type_option: Array<string> = TABLE_TYPE

	constructor(private requestService: RequestService,
				private auth: AngularFireAuth) 
	{
		this.code_form_flag = false
		this.herf_forward = PublicPaths.successPath.path
	}

	ngOnInit() {
		this.first_name = new FormControl('Анджей', [
			Validators.required,
			Validators.minLength(FIRST_NAME_MIN),
			Validators.maxLength(FIRST_NAME_MAX),
			Validators.pattern(FIRST_NAME_REG)
		])
		this.second_name = new FormControl('Сапковский', [			
			Validators.required,
			Validators.minLength(SECOND_NAME_MIN),
			Validators.maxLength(SECOND_NAME_MAX),
			Validators.pattern(SECOND_NAME_REG)
		])
		this.telephone = new FormControl('+7 989-702-6426', [
			Validators.required,
			Validators.minLength(TELEPHONE_MIN),
			Validators.maxLength(TELEPHONE_MAX),
			Validators.pattern(TELEPHONE_REG)
		])
		this.service_type = new FormControl('Крещение')
		this.children_amount = new FormControl('0', [
			Validators.required,
			Validators.min(CHILDREN_AMOUNT_MIN),
			Validators.max(CHILDREN_AMOUNT_MAX)
		])
		this.adult_amount = new FormControl('0', [
			Validators.required,
			Validators.min(ADULT_AMOUNT_MIN),
			Validators.max(CHILDREN_AMOUNT_MAX)
		])
		this.table_type = new FormControl('Распределенные столы')

		this.request_form = new FormGroup({
			first_name: this.first_name,
			second_name: this.second_name,
			telephone: this.telephone,
			service_type: this.service_type,
			children_amount: this.children_amount,
			adult_amount: this.adult_amount,
			table_type: this.table_type
		})

		this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('button-send-sms', { 'size': 'invisible' })
	}

	ngAfterViewInit() { }

	onGetCode() {
		// ЭТО ТРОГАТЬ НЕЛЬЗЯ, ПОЧЕМУ Я ДАННУЮ СТРОЧКУ РАЗ 10 УДАЛИЛ???????????????????????
		//this.requestService.get_code({...this.request_form.value}, this.recaptchaVerifier)
		this.code_form_flag = true
	}	

	onSendCode() {
		this.requestService.send_code({...this.request_form.value}, this.code_form.value)
		this.code_form_flag = false
	}
}
