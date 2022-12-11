import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/modules/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { PublicHeaderComponent } from './layouts/public-header/public-header.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component'
import { CodeInputModule } from 'angular-code-input';
import { UserHeaderComponent } from './layouts/user-header/user-header.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

import { MainInfoComponent } from './components/user/profile/main-info/main-info.component';
import { CertificationsComponent } from './components/user/profile/certifications/certifications.component';
import { ExperiencesComponent } from './components/user/profile/experiences/experiences.component';
import { HobbiesComponent } from './components/user/profile/hobbies/hobbies.component';
import { LanguagesComponent } from './components/user/profile/languages/languages.component';
import { SkillsComponent } from './components/user/profile/skills/skills.component';
import { SocialLinksComponent } from './components/user/profile/social-links/social-links.component';
import { StudiesComponent } from './components/user/profile/studies/studies.component';
import { TestimonialsComponent } from './components/user/profile/testimonials/testimonials.component';
import { MainInfoModule } from './components/user/profile/main-info/main-info.module';
import { CertificationsModule } from './components/user/profile/certifications/certifications.module';
import { ExperiencesModule } from './components/user/profile/experiences/experiences.module';
import { HobbiesModule } from './components/user/profile/hobbies/hobbies.module';
import { LanguagesModule } from './components/user/profile/languages/languages.module';
import { SkillsModule } from './components/user/profile/skills/skills.module';
import { SocialLinksModule } from './components/user/profile/social-links/social-links.module';
import { StudiesModule } from './components/user/profile/studies/studies.module';
import { TestimonialsModule } from './components/user/profile/testimonials/testimonials.module';

@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    PublicHeaderComponent,
    AuthLayoutComponent,
    UserHeaderComponent,
    UserLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    CodeInputModule,

    MainInfoModule,
    CertificationsModule,
    ExperiencesModule,
    HobbiesModule,
    LanguagesModule,
    SkillsModule,
    SocialLinksModule,
    StudiesModule,
    TestimonialsModule
  ],
  /*exports: [
    MainInfoModule,
    CertificationsModule,
    ExperiencesModule,
    HobbiesModule,
    LanguagesModule,
    SkillsModule,
    SocialLinksModule,
    StudiesModule,
    TestimonialsModule
  ],*/
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
