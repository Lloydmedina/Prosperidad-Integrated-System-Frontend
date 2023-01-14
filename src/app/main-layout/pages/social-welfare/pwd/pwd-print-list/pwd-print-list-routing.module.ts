import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwdPrintListComponent } from './pwd-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: PwdPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwdPrintListRoutingModule { }
