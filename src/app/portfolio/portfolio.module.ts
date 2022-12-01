import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { ServicesModule } from './services/services.module';
import { SkillsModule } from './skills/skills.module';
import { WorksModule } from './works/works.module';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { EducationModule } from './education/education.module';
import { ContactmeModule } from './contactme/contactme.module';


@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ServicesModule,
    SkillsModule,
    WorksModule,
    FeedbacksModule,
    EducationModule,
    ContactmeModule
  ]
})
export class PortfolioModule { }
