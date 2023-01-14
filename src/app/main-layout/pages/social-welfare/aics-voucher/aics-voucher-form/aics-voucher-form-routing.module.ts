import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsVoucherFormComponent } from './aics-voucher-form.component';

const routes: Routes = [
  {
    path: "",
    component: AicsVoucherFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsVoucherFormRoutingModule { }
