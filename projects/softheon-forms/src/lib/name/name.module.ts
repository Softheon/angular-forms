import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SofDirectiveModule } from '../directives/directives.module';

import { NameComponent } from './name.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SofDirectiveModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule
  ],
  declarations: [NameComponent],
  exports: [NameComponent]
})
export class SofNameModule { }