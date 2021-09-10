import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './homepage/homepage.module';
import { appReducers } from './state/store/reducers/app.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomepageModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
