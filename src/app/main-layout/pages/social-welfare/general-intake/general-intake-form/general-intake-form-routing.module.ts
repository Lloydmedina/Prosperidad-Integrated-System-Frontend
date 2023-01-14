import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralIntakeFormComponent } from './general-intake-form.component';

const routes: Routes = [
  {
    path: "",
    component: GeneralIntakeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralIntakeFormRoutingModule { }
