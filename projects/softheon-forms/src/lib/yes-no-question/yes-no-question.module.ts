import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { YesNoQuestionComponent } from './yes-no-question.component';
import { SofDirectiveModule } from '../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    SofDirectiveModule
  ],
  declarations: [YesNoQuestionComponent],
  exports: [YesNoQuestionComponent]
})
export class SofYesNoQuestionModule { }
