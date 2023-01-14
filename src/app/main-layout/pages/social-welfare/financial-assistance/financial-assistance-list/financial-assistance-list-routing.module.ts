import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialAssistanceListComponent } from './financial-assistance-list.component';

const routes: Routes = [
  {
    path: "",
    component: FinancialAssistanceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialAssistanceListRoutingModule { }
