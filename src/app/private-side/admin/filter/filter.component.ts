import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
	selector: 'app-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
	filter_form = new FormGroup({
		date_start: new FormControl(''),
		date_end: new FormControl(''),
		telephone: new FormControl(''),
		client_name: new FormControl(''),
		service_type: new FormControl('')
	})

	constructor() { }

	ngOnInit() { }

	onSearch() { }
}
