import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadaverTransferListComponent } from './cadaver-transfer-list.component';

const routes: Routes = [
  {
    path : "",
    component : CadaverTransferListComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadaverTransferListRoutingModule { }
