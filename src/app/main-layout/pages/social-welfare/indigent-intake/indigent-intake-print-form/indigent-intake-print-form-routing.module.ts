import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndigentIntakePrintFormComponent } from './indigent-intake-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: IndigentIntakePrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndigentIntakePrintFormRoutingModule { }
