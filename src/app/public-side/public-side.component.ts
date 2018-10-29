import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { RootState, FirestoreAction } from '../root-store'

@Component({
  selector: 'app-public-side',
  templateUrl: './public-side.component.html',
  styleUrls: ['./public-side.component.css']
})
export class PublicSideComponent implements OnInit {

  constructor(private store$: Store<RootState.State>) { }

  ngOnInit() {
  	this.store$.dispatch( new FirestoreAction.getFirestoreRequestStart({ documents: [] }) )
  }

}
