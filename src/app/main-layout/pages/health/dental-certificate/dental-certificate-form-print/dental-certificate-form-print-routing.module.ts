import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentalCertificateFormPrintComponent } from './dental-certificate-form-print.component';

const routes: Routes = [
  {
    path : "",
    component : DentalCertificateFormPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentalCertificateFormPrintRoutingModule { }
