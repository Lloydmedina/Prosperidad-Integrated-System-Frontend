import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountTitleListComponent } from './account-title-list.component';

const routes: Routes = [
  {
    path: "",
    component: AccountTitleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountTitleListRoutingModule { }
