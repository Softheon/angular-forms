import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule } from '@angular/material';

import { TextMaskModule } from 'angular2-text-mask';

import { SofDirectiveModule } from '../directives/directives.module';
import { SofStateModule } from '../state/state.module';

import { AddressComponent } from './address.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    SofDirectiveModule,
    SofStateModule,
    TextMaskModule
  ],
  declarations: [AddressComponent],
  exports: [AddressComponent]
})
export class SofAddressModule { }
