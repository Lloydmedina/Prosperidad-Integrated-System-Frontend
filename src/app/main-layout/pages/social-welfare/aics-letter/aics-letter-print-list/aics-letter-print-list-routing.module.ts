import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsLetterPrintListComponent } from './aics-letter-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: AicsLetterPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsLetterPrintListRoutingModule { }
