import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DentalCertificateFormNewRoutingModule } from './dental-certificate-form-new-routing.module';
import { DentalCertificateFormNewComponent } from './dental-certificate-form-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    DentalCertificateFormNewComponent
  ],
  imports: [
    CommonModule,
    DentalCertificateFormNewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class DentalCertificateFormNewModule { }
