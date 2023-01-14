import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentalCertificateRoutingModule } from './dental-certificate-routing.module';
import { DentalCertificateComponent } from './dental-certificate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    DentalCertificateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class DentalCertificateModule { }
