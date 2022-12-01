import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactmeRoutingModule } from './contactme-routing.module';
import { ContactmeComponent } from './contactme.component';


@NgModule({
  declarations: [
    ContactmeComponent
  ],
  imports: [
    CommonModule,
    ContactmeRoutingModule
  ],
  exports: [
    ContactmeComponent
  ]
})
export class ContactmeModule { }
