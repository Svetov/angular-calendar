import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootStoreModule } from './root-store';
import { PublicSideModule } from './public-side/public-side.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RootStoreModule,
    PublicSideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
