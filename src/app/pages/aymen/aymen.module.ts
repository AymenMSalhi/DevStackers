import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AymenRoutingModule } from './aymen-routing.module';
import { AymenComponent } from './aymen.component';


@NgModule({
  declarations: [
    AymenComponent
  ],
  imports: [
    CommonModule,
    AymenRoutingModule
  ]
})
export class AymenModule { }
