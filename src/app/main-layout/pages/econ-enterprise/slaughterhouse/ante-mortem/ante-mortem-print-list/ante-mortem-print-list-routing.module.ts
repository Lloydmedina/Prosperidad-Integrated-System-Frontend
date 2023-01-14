import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnteMortemPrintListComponent } from './ante-mortem-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: AnteMortemPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnteMortemPrintListRoutingModule { }
