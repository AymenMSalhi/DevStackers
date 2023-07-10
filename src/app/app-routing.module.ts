import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: PublicLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)  }
    ]
  },
  { 
    path: 'projects', 
    component: PublicLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule) }
    ]
  },
  { 
    path: 'technologies', 
    component: PublicLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/techs/techs.module').then(m => m.TechsModule) }
    ]
  },
  { 
    path: 'youtube-videos', 
    component: PublicLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/yt-videos/yt-videos.module').then(m => m.YtVideosModule) }
    ]
  },
  { 
    path: 'our-apps', 
    component: PublicLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/our-apps/our-apps.module').then(m => m.OurAppsModule) }
    ]
  },
  { 
    path: 'blog', 
    component: PublicLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule) }
    ]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
