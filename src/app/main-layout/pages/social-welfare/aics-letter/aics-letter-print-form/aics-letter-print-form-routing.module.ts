import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsLetterPrintFormComponent } from './aics-letter-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: AicsLetterPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsLetterPrintFormRoutingModule { }
