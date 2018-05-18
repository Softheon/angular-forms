import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SofNameModule, SofSocialSecurityNumberModule, SofDatePickerModule } from 'softheon-forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SofNameModule,
    SofSocialSecurityNumberModule,
    SofDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
