import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs'
import { filter, map } from 'rxjs/operators'

import { Store, select } from '@ngrx/store'

import { RootState, RootSelectors } from '../../root-store'

@Component({
	selector: 'app-success',
	templateUrl: './success.component.html',
	styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
	private first_name: Observable<string>
	private second_name: Observable<string>
	private date: Observable<string>
	private clocks: Observable<Array<string>>
	private telephone: Observable<string>
	private service_type: Observable<string>
	private children_amount: Observable<number>
	private adult_amount: Observable<number>

	constructor(private store: Store<RootState.State>) {
		this.second_name = store.pipe(
			select(RootSelectors.selectRequestAll),
			map(request => request.second_name)
		)
		this.first_name = store.pipe(
			select(RootSelectors.selectRequestAll),
			map(request => request.first_name)
		)
		this.date = store.pipe(
			select(RootSelectors.selectDay)
		)
		this.clocks = store.pipe(
			select(RootSelectors.selectClocks)
		)
		this.telephone = store.pipe(
			select(RootSelectors.selectRequest),
			map(request => request.telephone)
		)
		this.service_type = store.pipe(
			select(RootSelectors.selectRequest),
			map(request => request.service_type)
		)
		this.children_amount = store.pipe(
			select(RootSelectors.selectRequest),
			map(request => request.children_amount)
		)
		this.adult_amount = store.pipe(
			select(RootSelectors.selectRequest),
			map(request => request.adult_amount)
		)
	}

	ngOnInit() { }

}
