import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndigentIntakePrintListComponent } from './indigent-intake-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: IndigentIntakePrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndigentIntakePrintListRoutingModule { }
