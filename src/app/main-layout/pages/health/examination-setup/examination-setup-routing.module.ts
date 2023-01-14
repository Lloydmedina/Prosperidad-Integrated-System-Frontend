import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExaminationSetupComponent } from './examination-setup.component';

const routes: Routes = [
  {
    path: "",
    component: ExaminationSetupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaminationSetupRoutingModule { }
