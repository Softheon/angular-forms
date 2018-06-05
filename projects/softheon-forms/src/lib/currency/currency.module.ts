import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { SofDirectiveModule } from '../directives/directives.module';
import { TextMaskModule } from 'angular2-text-mask';

import { CurrencyComponent } from './currency.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    SofDirectiveModule,
    BrowserAnimationsModule,
    FormsModule,
    TextMaskModule
  ],
  declarations: [CurrencyComponent],
  exports: [CurrencyComponent]
})
export class SofCurrencyModule { }
