import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountTitleFormComponent } from './account-title-form.component';

const routes: Routes = [
  {
    path: "",
    component: AccountTitleFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountTitleFormRoutingModule { }
