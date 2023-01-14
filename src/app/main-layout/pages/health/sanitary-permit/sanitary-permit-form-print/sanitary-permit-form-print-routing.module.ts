import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanitaryPermitFormPrintComponent } from './sanitary-permit-form-print.component';

const routes: Routes = [
  {
    path : "",
    component : SanitaryPermitFormPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanitaryPermitFormPrintRoutingModule { }
