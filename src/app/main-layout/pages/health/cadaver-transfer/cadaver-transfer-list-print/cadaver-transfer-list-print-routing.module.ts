import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadaverTransferListPrintComponent } from './cadaver-transfer-list-print.component';

const routes: Routes = [
  {
    path : "",
    component : CadaverTransferListPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadaverTransferListPrintRoutingModule { }
