import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccCtFormPrintComponent } from './wcc-ct-form-print.component';

const routes: Routes = [
  {
    path : "",
    component : WccCtFormPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccCtFormPrintRoutingModule { }
