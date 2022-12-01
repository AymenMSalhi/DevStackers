import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) 
      }
    ]
  },
  { 
    path: 'blog', 
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) 
      }
    ]
  }, 
  { 
    path: 'contact', 
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./contact-me/contact-me.module').then(m => m.ContactMeModule)
      }
    ]
  },
  { path: 'visitor/my-services', loadChildren: () => import('./portfolio/services/services.module').then(m => m.ServicesModule) },
  { path: 'visitor/my-skills', loadChildren: () => import('./portfolio/skills/skills.module').then(m => m.SkillsModule) },
  { path: 'visitor/my-works', loadChildren: () => import('./portfolio/works/works.module').then(m => m.WorksModule) },
  { path: 'visitor/my-feedbacks', loadChildren: () => import('./portfolio/feedbacks/feedbacks.module').then(m => m.FeedbacksModule) },
  { path: 'visitor/my-education', loadChildren: () => import('./portfolio/education/education.module').then(m => m.EducationModule) },
  { path: 'visitor/contact-me', loadChildren: () => import('./portfolio/contactme/contactme.module').then(m => m.ContactmeModule) },
  
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
