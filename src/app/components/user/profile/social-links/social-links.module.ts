import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialLinksRoutingModule } from './social-links-routing.module';
import { SocialLinksComponent } from './social-links.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SocialLinksComponent
  ],
  imports: [
    CommonModule,
    SocialLinksRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    SocialLinksComponent
  ]
})
export class SocialLinksModule { }
