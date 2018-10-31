import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { RootState, AdminAction } from '../root-store'
//import { AngularFireAuth } from '@angular/fire/auth'

@Injectable()
export class PrivateService {
  
  constructor(private store$: Store<RootState.State>) {}

  sendLoginPasswordToStore(admin_form) {
	this.store$.dispatch( new AdminAction.loginFirebase({ ...admin_form.value }) )
  }
}
