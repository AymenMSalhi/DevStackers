import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurAppsRoutingModule } from './our-apps-routing.module';
import { OurAppsComponent } from './our-apps.component';


@NgModule({
  declarations: [
    OurAppsComponent
  ],
  imports: [
    CommonModule,
    OurAppsRoutingModule
  ]
})
export class OurAppsModule { }
