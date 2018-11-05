import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store'
import { RootState, PaginationAction } from '../../../root-store'

@Component({
  selector: 'app-page-button',
  templateUrl: './page-button.component.html',
  styleUrls: ['./page-button.component.css']
})
export class PageButtonComponent implements OnInit {
	@Input() page_number: number

  constructor(private store$: Store<RootState.State>) { }

  ngOnInit() { }

  page_change() {
  	this.store$.dispatch(new PaginationAction.ChangePage({ page: this.page_number }))
  }
}
