import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanitaryPermitFormNewComponent } from './sanitary-permit-form-new.component';

const routes: Routes = [
  {
    path : "",
    component : SanitaryPermitFormNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanitaryPermitFormNewRoutingModule { }
