import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'

import { RootState, RequestActions } from '../../../root-store'
import { Store } from '@ngrx/store'

//import { AngularFirestore } from '@angular/fire/firestore'
//import { A } from 'angularfire2/fire'

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  request_form = new FormGroup({
  	first_name: 		new FormControl(''),
  	second_name: 		new FormControl(''),
  	telephone: 			new FormControl(''),
  	service_type: 		new FormControl(''),
  	children_amount: 	new FormControl(''),
  	adult_amount: 		new FormControl(''),
  	table_type: 		new FormControl(''),
  });

  constructor(private store: Store<RootState.State>) { }

  ngOnInit() { }

  onSubmit() {
    let form_value = {...this.request_form.value};
    form_value.telephone = parseInt(form_value.telephone) || 0 
    form_value.adult_amount = parseInt(form_value.adult_amount) || 0
    form_value.children_amount = parseInt(form_value.children_amount) || 0
    form_value['request_status'] = 'on_fire'
    console.log(form_value)
    this.store.dispatch( new RequestActions.pushRequest(form_value) )
  }
}
