import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TextMaskModule } from 'angular2-text-mask';

import { PhoneNumberComponent } from './phone-number.component';
import { SofDirectiveModule } from '../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    SofDirectiveModule,
    TextMaskModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    FlexLayoutModule
  ],
  declarations: [PhoneNumberComponent],
  exports: [PhoneNumberComponent]
})
export class SofPhoneNumberModule { }
