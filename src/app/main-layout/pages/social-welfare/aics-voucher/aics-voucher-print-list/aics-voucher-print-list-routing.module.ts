import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsVoucherPrintListComponent } from './aics-voucher-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: AicsVoucherPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsVoucherPrintListRoutingModule { }
