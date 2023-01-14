import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialAssistancePrintListComponent } from './financial-assistance-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: FinancialAssistancePrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialAssistancePrintListRoutingModule { }
