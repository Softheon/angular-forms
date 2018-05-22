import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TextMaskModule } from 'angular2-text-mask';

import { SofDirectiveModule } from '../directives/directives.module';
import { SocialSecurityNumberComponent } from './social-security-number.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    FlexLayoutModule,
    TextMaskModule,
    SofDirectiveModule
  ],
  declarations: [
    SocialSecurityNumberComponent
  ],
  exports: [SocialSecurityNumberComponent]
})
export class SofSocialSecurityNumberModule { }
