import { Injectable } from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable, from } from 'rxjs'
import { map, mapTo, mergeMap, switchMap, catchError, tap } from 'rxjs/operators'

import { RequestActionTypes, RequestActions, changeStatus } from './request-action'
import { State } from './request-state'

import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore'


@Injectable()
export class RequestEffect {
	private request_collection: AngularFirestoreCollection<State>

	constructor(private actions$: Actions, db: AngularFirestore) {
		this.request_collection = db.collection<State>('requests')
	}

	@Effect({ dispatch: false }) requestAdd = this.actions$.pipe(
		ofType(RequestActionTypes.PUSH_REQUEST),
		map((action: RequestActions) => action.payload),
		map((payload: State): Observable<DocumentReference> => from(this.request_collection.add(payload)))
		//mapTo( new changeStatus({ request_status: 'on_server' }) )
	)
}