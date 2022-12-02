import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceSkillsComponent } from './experience-skills.component';

const routes: Routes = [{ path: '', component: ExperienceSkillsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceSkillsRoutingModule { }
