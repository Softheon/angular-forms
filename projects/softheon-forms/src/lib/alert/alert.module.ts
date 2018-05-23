import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FlexLayoutModule } from '@angular/flex-layout';

import { AlertComponent } from './alert.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [AlertComponent],
  exports: [AlertComponent]
})
export class SofAlertModule { }