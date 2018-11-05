import { Component, OnInit } from '@angular/core';
import { TableService } from '../table/table.service'
import { Observable } from 'rxjs'


@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
	page_amount: Array<number>

	constructor(private table_service: TableService) {
		table_service.page_amount_listner$.subscribe(res => this.page_amount = Array.apply(null, {length: res}).map(Number.call, Number) )
	}

	ngOnInit() { }
}
