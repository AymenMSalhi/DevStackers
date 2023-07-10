import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YtVideosRoutingModule } from './yt-videos-routing.module';
import { YtVideosComponent } from './yt-videos.component';


@NgModule({
  declarations: [
    YtVideosComponent
  ],
  imports: [
    CommonModule,
    YtVideosRoutingModule
  ]
})
export class YtVideosModule { }
