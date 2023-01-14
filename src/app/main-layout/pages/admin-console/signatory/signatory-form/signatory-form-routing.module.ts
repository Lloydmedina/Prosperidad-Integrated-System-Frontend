import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignatoryFormComponent } from './signatory-form.component';

const routes: Routes = [
  {
    path: "",
    component: SignatoryFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignatoryFormRoutingModule { }
