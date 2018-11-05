import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service'
import { PaginationState } from '../../../root-store'
import { PAGE_SIZE } from '../../../app.parametrs'


@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	page_requests: Array<PaginationState.FirestoreState>

	constructor(private table_service: TableService) {
		this.table_service.page_requests$.subscribe(res => this.page_requests = res.concat(Array.apply(null, {length: (PAGE_SIZE - res.length)})
																				   .map(Number.call, Number)
																				   .map(res => PaginationState.FirestoreStateInit))
		)
	}

	ngOnInit() { }

}
