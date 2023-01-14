import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExaminationSetupFormComponent } from './examination-setup-form.component';

const routes: Routes = [
  {
    path: "",
    component: ExaminationSetupFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaminationSetupFormRoutingModule { }
