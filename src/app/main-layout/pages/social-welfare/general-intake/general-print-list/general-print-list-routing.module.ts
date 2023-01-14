import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralPrintListComponent } from './general-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: GeneralPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralPrintListRoutingModule { }
