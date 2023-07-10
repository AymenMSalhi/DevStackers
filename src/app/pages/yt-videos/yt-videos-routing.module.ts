import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YtVideosComponent } from './yt-videos.component';

const routes: Routes = [{ path: '', component: YtVideosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YtVideosRoutingModule { }
