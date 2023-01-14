import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndigentIntakeFormComponent } from './indigent-intake-form.component';

const routes: Routes = [
  {
    path: "",
    component: IndigentIntakeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndigentIntakeFormRoutingModule { }
