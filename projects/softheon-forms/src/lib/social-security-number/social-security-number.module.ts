import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TextMaskModule } from 'angular2-text-mask';

import { NumberOfDigitsDirective } from '../directives/number-of-digits.directive';
import { SocialSecurityNumberComponent } from './social-security-number.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TextMaskModule
  ],
  declarations: [
    SocialSecurityNumberComponent,
    NumberOfDigitsDirective
  ],
  exports: [SocialSecurityNumberComponent]
})
export class SofSocialSecurityNumberModule { }
