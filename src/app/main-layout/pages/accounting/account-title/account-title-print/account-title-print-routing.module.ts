import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountTitlePrintComponent } from './account-title-print.component';

const routes: Routes = [
  {
    path: "",
    component: AccountTitlePrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountTitlePrintRoutingModule { 

    

 }
