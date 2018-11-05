import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Store, select } from '@ngrx/store'
import { RootState, 
		 RootSelectors,
		 PaginationState } from '../../../root-store'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { PAGE_SIZE } from '../../../app.parametrs'


@Injectable()
export class TableService {
	page_amount_listner$: Observable<number>
	page_requests$: Observable<Array<PaginationState.FirestoreState>>

	constructor(private firestore: AngularFirestore,
				private store$: Store<RootState.State>) 
	{
		this.page_amount_listner$ = this.store$.pipe(
			select(RootSelectors.selectRequestLength),
			map(res => this.count_page_amount(res))
		)
		this.page_requests$ = this.store$.pipe(
			select(RootSelectors.selectPageRequests)
		)
	}

	count_page_amount(amount: number) {
		let main_amount = Math.floor(amount / PAGE_SIZE)
		return amount % PAGE_SIZE === 0 ? main_amount : main_amount + 1
	}
}
