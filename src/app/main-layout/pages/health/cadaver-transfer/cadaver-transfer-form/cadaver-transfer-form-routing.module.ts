import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadaverTransferFormComponent } from './cadaver-transfer-form.component';

const routes: Routes = [
  {
    path : "",
    component : CadaverTransferFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadaverTransferFormRoutingModule { }
