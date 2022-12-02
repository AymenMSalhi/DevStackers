import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AymenRoutingModule } from './aymen-routing.module';
import { AymenComponent } from './aymen.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ExperienceSkillsComponent } from './experience-skills/experience-skills.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { LinksComponent } from './links/links.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { StudiesComponent } from './studies/studies.component';


@NgModule({
    declarations: [
        AymenComponent,
        IntroComponent,
        AboutComponent,
        ContactUsComponent,
        ExperienceSkillsComponent,
        FeedbacksComponent,
        LinksComponent,
        MyServicesComponent,
        StudiesComponent
    ],
    imports: [
        CommonModule,
        AymenRoutingModule
    ]
})
export class AymenModule { }
