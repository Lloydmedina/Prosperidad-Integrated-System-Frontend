import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignatoryComponent } from './signatory.component';

const routes: Routes = [
  {
    path: "",
    component: SignatoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignatoryRoutingModule { }
