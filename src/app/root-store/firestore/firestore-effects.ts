import { Injectable } from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects'
import { Action, select } from '@ngrx/store'
import { Observable, from } from 'rxjs'
import { map, mapTo, mergeMap, switchMap, catchError, tap, withLatestFrom } from 'rxjs/operators'
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore'
import { Store } from '@ngrx/store'
import { HttpHeaders, HttpClient } from '@angular/common/http'
import * as AppParametrs from '../../app.parametrs'
import { State } from './firestore-state'
import { FirestoreActionTypes, getFirestoreRequestSuccess } from './firestore-action'

@Injectable()
export class FirestoreEffect {
	private request_collection: AngularFirestoreCollection<State>
	private date_value: string
	private clocks_mas: Array<string>

	constructor(private actions$: Actions, 
				private db: AngularFirestore,
				private http: HttpClient) 
	{
		this.request_collection = db.collection<State>('requests')
	}

	@Effect() get_firestore_reguests = this.actions$.pipe(
		ofType(FirestoreActionTypes.GET_FIRESTORE_REQUEST_START),
		switchMap( x => from(this.request_collection.valueChanges()).pipe(
			map((x: []) => new getFirestoreRequestSuccess({ documents: x }))
		))
	)


}
