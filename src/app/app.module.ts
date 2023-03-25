import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CodeInputModule } from 'angular-code-input';

@NgModule({
  declarations: [
    AppComponent
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
