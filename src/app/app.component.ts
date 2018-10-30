import { Component } from '@angular/core';
import * as firebase from 'firebase'
import { FCMtoken } from './app.parametrs'
import { AppService } from './app.service'
import { RootState, FirestoreAction } from './root-store'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calendar';

  constructor(private app: AppService,
  			  private store$: Store<RootState.State>) 
  {
  	this.store$.dispatch( new FirestoreAction.changeToken({ token: '12' }) )
  	this.app.initPermission()
  	this.app.getPermission()
  	this.app.monitorRefresh()
  	this.app.receiveMessage()
  }
}
  