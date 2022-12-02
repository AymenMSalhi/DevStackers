import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceSkillsRoutingModule } from './experience-skills-routing.module';
import { ExperienceSkillsComponent } from './experience-skills.component';


@NgModule({
  declarations: [
    ExperienceSkillsComponent
  ],
  imports: [
    CommonModule,
    ExperienceSkillsRoutingModule
  ]
})
export class ExperienceSkillsModule { }
