import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from 'src/app/layouts/user-layout/user-layout.component';
import { UserComponent } from './user.component';

const routes: Routes = [

  {
    path: 'profile/general',
    component: UserLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./profile/main-info/main-info.module').then(m => m.MainInfoModule) }
    ]
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile'
  },

  { path: 'profile/experiences', loadChildren: () => import('./profile/experiences/experiences.module').then(m => m.ExperiencesModule) },

  { path: 'profile/studies', loadChildren: () => import('./profile/studies/studies.module').then(m => m.StudiesModule) },

  { path: 'profile/skills', loadChildren: () => import('./profile/skills/skills.module').then(m => m.SkillsModule) },

  { path: 'profile/certifications', loadChildren: () => import('./profile/certifications/certifications.module').then(m => m.CertificationsModule) },

  { path: 'profile/languages', loadChildren: () => import('./profile/languages/languages.module').then(m => m.LanguagesModule) },

  { path: 'profile/testimonials', loadChildren: () => import('./profile/testimonials/testimonials.module').then(m => m.TestimonialsModule) },

  { path: 'profile/social-links', loadChildren: () => import('./profile/social-links/social-links.module').then(m => m.SocialLinksModule) },

  { path: 'profile/hobbies', loadChildren: () => import('./profile/hobbies/hobbies.module').then(m => m.HobbiesModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
