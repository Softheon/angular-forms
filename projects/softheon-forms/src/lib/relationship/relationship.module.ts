import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';

import { RelationshipComponent } from './relationship.component';
import { SofDirectiveModule } from '../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    SofDirectiveModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    FlexLayoutModule
  ],
  declarations: [RelationshipComponent],
  exports: [RelationshipComponent]
})
export class SofRelationshipModule { }
