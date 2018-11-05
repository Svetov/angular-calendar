import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { RootState, AdminAction, PaginationAction } from '../../../root-store'
import { LOGIN_STATUS } from '../../../app.parametrs'


@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	constructor(private store$: Store<RootState.State>) { 
		this.store$.dispatch( new PaginationAction.GetRequestsLength() )  
		this.store$.dispatch( new PaginationAction.ChangePage({ page: 0 }) )  
	}

	ngOnInit() { }

	logOut() {
		this.store$.dispatch(new AdminAction.logOutStart({ status: LOGIN_STATUS.NONE }))
	}
}
