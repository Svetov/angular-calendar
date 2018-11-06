import { Component, 
		 OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { RootState, 
		 AdminAction, 
		 PaginationAction } from '../../../root-store'
import { LOGIN_STATUS } from '../../../app.parametrs'
import { AppService } from '../../../app.service'


@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	constructor(private store$: Store<RootState.State>,
				private app: AppService) 
	{
		// Получение прав на отправку нотификаций и полчение нотификаций
		//this.store$.dispatch(new AdminAction.changeToken({ token: '' }))
		this.app.monitorRefresh()
		
		this.store$.dispatch( new PaginationAction.GetRequestsLength() )  
	}

	ngOnInit() { }

	logOut() {
		this.store$.dispatch(new AdminAction.logOutStart({ status: LOGIN_STATUS.NONE }))
	}
}
