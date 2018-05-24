import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { NumberOfDigitsDirective } from './number-of-digits.directive';
import { ProvideParentFormDirective } from './provide-parent-form.directive';
import { LettersOnlyDirective } from './letters-only.directive';
import { NumberOfDigitsRangeDirective } from './number-of-digits-range.directive';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ],    
    declarations: [
        NumberOfDigitsDirective,
        ProvideParentFormDirective,
        LettersOnlyDirective,
        NumberOfDigitsRangeDirective
    ],
    exports: [
        NumberOfDigitsDirective,
        ProvideParentFormDirective,
        LettersOnlyDirective,
        NumberOfDigitsRangeDirective
    ]
  })
  export class SofDirectiveModule { }