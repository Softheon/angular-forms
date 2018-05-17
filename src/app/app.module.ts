import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SoftheonFormsModule } from 'softheon-forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SoftheonFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
