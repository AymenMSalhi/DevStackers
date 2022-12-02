import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AymenRoutingModule } from './aymen-routing.module';
import { AymenComponent } from './aymen.component';
import { IntroModule } from './intro/intro.module';
import { AboutModule } from './about/about.module';
import { ExperienceSkillsModule } from './experience-skills/experience-skills.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { LinksModule } from './links/links.module';
import { MyServicesModule } from './my-services/my-services.module';
import { StudiesModule } from './studies/studies.module';
import { ContactUsModule } from './contact-us/contact-us.module';


@NgModule({
    declarations: [
        AymenComponent,
    ],
    imports: [
        CommonModule,
        AymenRoutingModule,
        IntroModule,
        AboutModule,
        ExperienceSkillsModule,
        FeedbacksModule,
        LinksModule,
        MyServicesModule,
        StudiesModule,
        ContactUsModule
    ]
})
export class AymenModule { }
