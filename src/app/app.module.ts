import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RootStoreModule } from './root-store';
import { PublicSideModule } from './public-side/public-side.module';

import { AppComponent } from './app.component';
import { PrivateSideModule } from './private-side/private-side.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RootStoreModule,
    PublicSideModule,
    AppRoutingModule,
    PrivateSideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
