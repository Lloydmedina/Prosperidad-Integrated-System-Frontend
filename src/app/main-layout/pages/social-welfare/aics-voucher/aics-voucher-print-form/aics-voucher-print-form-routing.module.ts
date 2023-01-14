import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsVoucherPrintFormComponent } from './aics-voucher-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: AicsVoucherPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsVoucherPrintFormRoutingModule { }
