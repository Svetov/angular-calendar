import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { AngularFirestore } from '@angular/fire/firestore'
import { FCMtoken } from './app.parametrs'
import { RootState, FirestoreAction } from './root-store'
import { Store } from '@ngrx/store'

@Injectable()
export class AppService {
	private messaging = firebase.messaging()

	constructor(private firestore: AngularFirestore,
				private store$: Store<RootState.State>) {}

	initPermission() {
		this.messaging.usePublicVapidKey(FCMtoken)
	}

	getPermission() {
		this.messaging.requestPermission()
			.then(() => {
				console.log('Success getPermission')
				return this.messaging.getToken()
			})
			.then(token => {
				console.log(token)
				this.saveToken(token)
			})
			.catch(err => {
				console.log('Error getPermission')
			})
	}

	monitorRefresh() {
	this.messaging.onTokenRefresh(() => {
		this.messaging.getToken()
			.then(new_token => {
				console.log('New token', new_token)
				this.saveToken(new_token)
			})
			.catch(err => {
				console.log('Err monitorRefresh')
			})
		})
	}

	receiveMessage() {
		this.messaging.onMessage(pyload => {
			console.log('Recive message', pyload)
		})
	}

	saveToken(token) {
		this.store$.dispatch( new FirestoreAction.changeToken({ token: token }) )
		/*
		const token_ref = this.firestore.collection('admin').doc('token')
		token_ref.update({ value: token })
			.then(() => {
				console.log('Success update')
			})
			.catch(err => {
				console.log('Error update')
			})
		*/
	}
}
