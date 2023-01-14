import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DafacIntakeFormComponent } from './dafac-intake-form.component';

const routes: Routes = [
  {
    path: "",
    component: DafacIntakeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DafacIntakeFormRoutingModule { }
