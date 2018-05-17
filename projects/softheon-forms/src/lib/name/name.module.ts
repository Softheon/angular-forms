import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NameComponent } from './name.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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