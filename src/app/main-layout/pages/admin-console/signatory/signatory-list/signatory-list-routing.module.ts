import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignatoryListComponent } from './signatory-list.component';

const routes: Routes = [
  {
    path: "",
    component: SignatoryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignatoryListRoutingModule { }
