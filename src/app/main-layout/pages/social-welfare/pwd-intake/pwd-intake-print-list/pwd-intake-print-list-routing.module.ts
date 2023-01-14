import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwdIntakePrintListComponent } from './pwd-intake-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: PwdIntakePrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwdIntakePrintListRoutingModule { }
