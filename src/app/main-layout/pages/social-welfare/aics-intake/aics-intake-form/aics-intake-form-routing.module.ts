import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsIntakeFormComponent } from './aics-intake-form.component';

const routes: Routes = [
  {
    path: "",
    component: AicsIntakeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsIntakeFormRoutingModule { }
