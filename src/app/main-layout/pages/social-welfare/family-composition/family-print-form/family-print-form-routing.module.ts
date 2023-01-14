import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyPrintFormComponent } from './family-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: FamilyPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyPrintFormRoutingModule { }
