import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatDatepickerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DatePickerComponent } from './date-picker.component';
import { Browser } from 'protractor';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMomentDateModule,
    FlexLayoutModule
  ],
  declarations: [DatePickerComponent],
  exports: [DatePickerComponent]
})
export class SofDatePickerModule { }
