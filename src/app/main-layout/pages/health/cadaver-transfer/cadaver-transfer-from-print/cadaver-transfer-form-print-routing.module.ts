import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadaverTransferFromPrintComponent } from './cadaver-transfer-from-print.component';

const routes: Routes = [
  {
    path : "",
    component : CadaverTransferFromPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadaverTransferFormPrintRoutingModule { }
