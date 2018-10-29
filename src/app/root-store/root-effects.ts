import { RequestEffect } from './request-store'
import { FirestoreEffect } from './firestore'

export const RootEffects = [ RequestEffect, FirestoreEffect ]