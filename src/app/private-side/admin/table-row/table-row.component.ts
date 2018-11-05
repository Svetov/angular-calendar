import { Component, 
		 OnInit,
		 Input } from '@angular/core';
import { PaginationState } from '../../../root-store'

@Component({
	selector: 'app-table-row',
	templateUrl: './table-row.component.html',
	styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {
	@Input() row_data: PaginationState.FirestoreState

	constructor() { }

	ngOnInit() {
		if(this.row_data === undefined) { this.row_data = {
				first_name: 'null',
				second_name: 'null',
				telephone: 'null',
				service_type: 'null',
				children_amount: 0,
				adult_amount: 0,
				table_type: 'null',
				request_status: 'null',
				date: 'null',
				clocks: ['null', 'null']
			} 
		}
	}
}
