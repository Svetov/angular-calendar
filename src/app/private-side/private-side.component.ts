import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Store } from '@ngrx/store'
import { RootState, AdminAction } from '../root-store'
import { PrivateService } from './private.service'

@Component({
  selector: 'app-private-side',
  templateUrl: './private-side.component.html',
  styleUrls: ['./private-side.component.css']
})
export class PrivateSideComponent implements OnInit {
  admin_form = new FormGroup({
  	email: new FormControl('lodoss@email.com'),
  	password: new FormControl('lodoss')
  })

  constructor(private store$: Store<RootState.State>,
  			  private private_service: PrivateService) 
  {}

  ngOnInit() {}

  onSendLoginPassword() {
  	this.private_service.sendLoginPasswordToStore(this.admin_form)
  }
}
