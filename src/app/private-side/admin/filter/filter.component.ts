import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Store } from '@ngrx/store'
import { RootState, FilterAction } from '../../../root-store'


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

	constructor(private store$: Store<RootState.State>) { }

	ngOnInit() { }

	onSearch() {
		let filter_value = Object.entries(this.filter_form.value).filter(item => item[1] !== '').map(item => {
			return { 
				parametr: item[0],
				value: item[1] 
			} 
		})
		this.store$.dispatch(new FilterAction.changeValue({ value: filter_value }))
	}
}
