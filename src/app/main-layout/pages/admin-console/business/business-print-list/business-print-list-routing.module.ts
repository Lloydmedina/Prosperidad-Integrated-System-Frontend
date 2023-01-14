import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessPrintListComponent } from './business-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: BusinessPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessPrintListRoutingModule { }
