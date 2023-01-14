import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeatInspectionCertificateComponent } from './meat-inspection-certificate.component';

const routes: Routes = [
  {
    path: "",
    component: MeatInspectionCertificateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeatInspectionCertificateRoutingModule { }
