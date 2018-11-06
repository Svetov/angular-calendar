import { Component } from '@angular/core';
import * as firebase from 'firebase'
import { FCM_TOKEN } from './app.parametrs'
import { AppService } from './app.service'
import { RootState, AdminAction } from './root-store'
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
        this.app.initPermission()
        this.app.getPermission()
        this.app.receiveMessage()
    }
}
  