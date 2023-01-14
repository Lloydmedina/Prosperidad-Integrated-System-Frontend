import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadaverTransferFormNewComponent } from './cadaver-transfer-form-new.component';

const routes: Routes = [
  {
    path : "",
    component : CadaverTransferFormNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadaverTransferFormNewRoutingModule { }
