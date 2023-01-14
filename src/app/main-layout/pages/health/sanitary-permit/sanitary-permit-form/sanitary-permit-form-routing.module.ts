import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanitaryPermitFormComponent } from './sanitary-permit-form.component';

const routes: Routes = [
  {
    path: "",
    component: SanitaryPermitFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanitaryPermitFormRoutingModule { }
