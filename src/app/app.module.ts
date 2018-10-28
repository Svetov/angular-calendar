import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RootStoreModule } from './root-store';
import { PublicSideModule } from './public-side/public-side.module';

import { AppComponent } from './app.component';
import { PrivateSideModule } from './private-side/private-side.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from './../environments/environment'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RootStoreModule,
    PublicSideModule,
    AppRoutingModule,
    PrivateSideModule,
    AngularFireModule.initializeApp(environment.firebase),  
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
