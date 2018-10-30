import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { RootStoreModule } from './root-store';
import { PublicSideModule } from './public-side/public-side.module';
import { AppComponent } from './app.component';
import { PrivateSideModule } from './private-side/private-side.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from './../environments/environment.prod';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppService } from './app.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RootStoreModule,
    PublicSideModule,
    AppRoutingModule,
    PrivateSideModule,
    AngularFireModule.initializeApp(environment.firebase),  
    AngularFirestoreModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AppService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
