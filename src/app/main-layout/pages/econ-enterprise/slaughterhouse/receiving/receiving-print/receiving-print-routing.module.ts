import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceivingPrintComponent } from './receiving-print.component';

const routes: Routes = [
  {
    path: "",
    component: ReceivingPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceivingPrintRoutingModule { }
