import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccArFormPrintComponent } from './wcc-ar-form-print.component';

const routes: Routes = [{
  path : "",
  component : WccArFormPrintComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccArFormPrintRoutingModule { }
