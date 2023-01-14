import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DentalCertificateListComponent } from './dental-certificate-list.component';

const routes: Routes = [
  {
    path: "",
    component: DentalCertificateListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DentalCertificateListRoutingModule { }
