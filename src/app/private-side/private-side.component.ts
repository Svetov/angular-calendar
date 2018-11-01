import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Store, select } from '@ngrx/store'
import { RootState, AdminAction, RootSelectors } from '../root-store'
import { PrivateService } from './private.service'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { loginStatus } from '../app.parametrs'


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
  status$: Observable<boolean>

  constructor(private store$: Store<RootState.State>,
  			      private private_service: PrivateService) 
  {
    this.status$ = this.store$.pipe(
      select(RootSelectors.selectAdminStatus),
      map(status => status === loginStatus.fail)
    )
  }

  ngOnInit() {}

  onSendLoginPassword() {
  	this.private_service.sendLoginPasswordToStore(this.admin_form)
  }
}
