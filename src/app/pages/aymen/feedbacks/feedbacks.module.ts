import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbacksRoutingModule } from './feedbacks-routing.module';
import { FeedbacksComponent } from './feedbacks.component';


@NgModule({
  declarations: [
    FeedbacksComponent
  ],
  imports: [
    CommonModule,
    FeedbacksRoutingModule
  ],
  exports: [
    FeedbacksComponent
  ]
})
export class FeedbacksModule { }
