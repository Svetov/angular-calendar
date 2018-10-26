import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Component({
	selector: 'app-request',
	templateUrl: './request.component.html',
	styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

 	constructor(db: AngularFirestore) { }

 	ngOnInit() {}
}
