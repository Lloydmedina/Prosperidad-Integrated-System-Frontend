import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelinquentPrintComponent } from './delinquent-print.component';
const routes: Routes = [
  {
    path: "",
    component: DelinquentPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelinquentPrintRoutingModule { }
