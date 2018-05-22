import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { NumberOfDigitsDirective } from './number-of-digits.directive';
import { ProvideParentFormDirective } from './provide-parent-form.directive';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ],    
    declarations: [
        NumberOfDigitsDirective,
        ProvideParentFormDirective
    ],
    exports: [
        NumberOfDigitsDirective,
        ProvideParentFormDirective
    ]
  })
  export class SofDirectiveModule { }