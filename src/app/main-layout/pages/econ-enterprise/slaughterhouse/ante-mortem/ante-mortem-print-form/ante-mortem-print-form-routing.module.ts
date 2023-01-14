import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnteMortemPrintFormComponent } from './ante-mortem-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: AnteMortemPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnteMortemPrintFormRoutingModule { }
