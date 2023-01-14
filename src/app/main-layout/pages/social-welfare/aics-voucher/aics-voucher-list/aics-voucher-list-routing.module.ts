import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsVoucherListComponent } from './aics-voucher-list.component';

const routes: Routes = [
  {
    path: "",
    component: AicsVoucherListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsVoucherListRoutingModule { }
