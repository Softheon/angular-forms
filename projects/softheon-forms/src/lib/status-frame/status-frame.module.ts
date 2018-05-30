import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatCardModule } from '@angular/material';

import { StatusFrameComponent } from './status-frame.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatCardModule
  ],
  declarations: [StatusFrameComponent],
  exports: [StatusFrameComponent]
})
export class SofStatusFrameModule { }
