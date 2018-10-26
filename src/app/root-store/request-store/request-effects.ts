import { Injectable } from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable, from } from 'rxjs'
import { map, mapTo, mergeMap, switchMap, catchError } from 'rxjs/operators'

import { RequestActionTypes, changeStatus } from './request-action'
import { State } from './request-state'

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'


@Injectable()
export class RequestEffect {
	private request_collection: AngularFirestoreCollection<State>

	constructor(private actions$: Actions, db: AngularFirestore) {
		this.request_collection = db.collection<State>('requests')
	}

	@Effect() requestAdd = this.actions$.pipe(
		ofType(RequestActionTypes.PUSH_REQUEST),
		switchMap(action => from(this.request_collection.add(action.payload)).pipe(
				mapTo( new changeStatus({ request_status: 'on_server' }) ),
				catchError(val => new changeStatus({ request_status: 'server_error' }) )
			)
		)
	)
}