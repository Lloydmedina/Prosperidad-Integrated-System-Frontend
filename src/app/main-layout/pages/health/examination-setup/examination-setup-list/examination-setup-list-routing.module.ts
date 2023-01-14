import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExaminationSetupListComponent } from './examination-setup-list.component';

const routes: Routes = [
  {
    path: "",
    component: ExaminationSetupListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaminationSetupListRoutingModule { }
