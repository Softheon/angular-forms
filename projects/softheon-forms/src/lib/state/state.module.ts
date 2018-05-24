import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatSelectModule } from '@angular/material';

import { SofDirectiveModule } from '../directives/directives.module';

import { StateComponent } from './state.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: [StateComponent],
  exports: [StateComponent]
})
export class SofStateModule { }
