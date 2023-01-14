import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountTitleComponent } from './account-title.component';

const routes: Routes = [
  {
    path: "",
    component: AccountTitleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountTitleRoutingModule { }
