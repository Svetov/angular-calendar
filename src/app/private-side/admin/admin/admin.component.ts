import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { RootState, AdminAction } from '../../../root-store'
import { loginStatus } from '../../../app.parametrs'


@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	constructor(private store$: Store<RootState.State>) { 
		this.store$.dispatch( new AdminAction.getRequestsStart() )
	}

	ngOnInit() { }

	logOut() {
		this.store$.dispatch(new AdminAction.logOutStart({ status: loginStatus.none }))
	}
}
