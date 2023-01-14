import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyPrintListComponent } from './family-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: FamilyPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyPrintListRoutingModule { }
