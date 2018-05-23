import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SofNameModule, SofSocialSecurityNumberModule, SofDatePickerModule, SofDirectiveModule, SofAlertModule } from 'softheon-forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SofNameModule,
    SofSocialSecurityNumberModule,
    SofDatePickerModule,
    FormsModule,
    SofDirectiveModule,
    SofAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
