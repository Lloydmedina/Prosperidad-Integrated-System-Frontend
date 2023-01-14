import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsVoucherComponent } from './aics-voucher.component';

const routes: Routes = [
  {
    path: "",
    component: AicsVoucherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsVoucherRoutingModule { }
