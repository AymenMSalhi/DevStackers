import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CodeInputModule } from 'angular-code-input';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { PublicHeaderComponent } from './layouts/public-header/public-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    PublicHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CodeInputModule,
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
