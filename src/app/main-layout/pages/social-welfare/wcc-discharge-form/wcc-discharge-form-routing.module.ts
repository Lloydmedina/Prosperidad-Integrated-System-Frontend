import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccDischargeFormComponent } from './wcc-discharge-form.component';

const routes: Routes = [
  {
    path: '',
    component: WccDischargeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccDischargeFormRoutingModule { }
