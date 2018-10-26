import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
//import { select } from 'rxjs/operator'

import { Store, select } from '@ngrx/store'
import { RootState, RootSelectors } from '../../../root-store'

@Component({
  selector: 'app-request-comfirm',
  templateUrl: './request-comfirm.component.html',
  styleUrls: ['./request-comfirm.component.css']
})
export class RequestComfirmComponent implements OnInit {
	private request_status: Observable<string>

	constructor(private store: Store<RootState.State>) {
		this.request_status = this.store.pipe(select(RootSelectors.selectRequestStatus))
	}

	ngOnInit() {}

}
