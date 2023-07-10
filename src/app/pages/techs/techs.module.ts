import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechsRoutingModule } from './techs-routing.module';
import { TechsComponent } from './techs.component';


@NgModule({
  declarations: [
    TechsComponent
  ],
  imports: [
    CommonModule,
    TechsRoutingModule
  ]
})
export class TechsModule { }
