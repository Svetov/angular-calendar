import { RequestEffect } from './request-store'
import { FirestoreEffect } from './firestore'
import { AdminEffect } from './admin-store'

export const RootEffects = [ RequestEffect, FirestoreEffect, AdminEffect ]