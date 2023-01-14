import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalCertificateListPrintComponent } from './medical-certificate-list-print.component';

const routes: Routes = [
  {
    path : "",
    component : MedicalCertificateListPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalCertificateListPrintRoutingModule { }
