import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalCertificateFormPrintComponent } from './medical-certificate-form-print.component';

const routes: Routes = [
  {
    path : "",
    component : MedicalCertificateFormPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalCertificateFormPrintRoutingModule { }
