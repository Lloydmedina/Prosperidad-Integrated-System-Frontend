import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadaverTransferComponent } from './cadaver-transfer.component';

const routes: Routes = [
  {
    path : "",
    component : CadaverTransferComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadaverTransferRoutingModule { }
