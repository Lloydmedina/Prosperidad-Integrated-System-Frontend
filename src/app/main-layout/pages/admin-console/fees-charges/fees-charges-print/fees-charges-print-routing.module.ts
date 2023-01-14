import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesChargesPrintComponent } from './fees-charges-print.component';

const routes: Routes = [
  {
    path: "",
    component: FeesChargesPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeesChargesPrintRoutingModule { 

    

 }
