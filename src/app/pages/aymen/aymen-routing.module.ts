import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from 'src/app/layouts/main-layout/main-layout.component';
import { AymenComponent } from './aymen.component';

const routes: Routes = [
  {
    path: '',
    component: AymenComponent,
  },
  { path: 'about-me', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'my-services', loadChildren: () => import('./my-services/my-services.module').then(m => m.MyServicesModule) },
  { path: 'experiences', loadChildren: () => import('./experience-skills/experience-skills.module').then(m => m.ExperienceSkillsModule) },
  { path: 'my-studies', loadChildren: () => import('./studies/studies.module').then(m => m.StudiesModule) },
  { path: 'feedbacks', loadChildren: () => import('./feedbacks/feedbacks.module').then(m => m.FeedbacksModule) },
  { path: 'links', loadChildren: () => import('./links/links.module').then(m => m.LinksModule) },
  { path: 'contact-us', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AymenRoutingModule { }
