import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentalCertificateListComponent } from '../dental-certificate-list/dental-certificate-list.component';
import { DentalCertificateListPrintComponent } from './dental-certificate-list-print.component';

const routes: Routes = [
  {
    path : "",
    component : DentalCertificateListPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentalCertificateListPrintRoutingModule { }
