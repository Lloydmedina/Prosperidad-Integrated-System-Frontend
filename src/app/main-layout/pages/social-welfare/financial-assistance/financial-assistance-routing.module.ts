import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialAssistanceComponent } from './financial-assistance.component';

const routes: Routes = [
  {
    path: "",
    component: FinancialAssistanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialAssistanceRoutingModule { }
