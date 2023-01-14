import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadaverTransferFormNewRoutingModule } from './cadaver-transfer-form-new-routing.module';
import { CadaverTransferFormNewComponent } from './cadaver-transfer-form-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    CadaverTransferFormNewComponent
  ],
  imports: [
    CommonModule,
    CadaverTransferFormNewRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class CadaverTransferFormNewModule { }
