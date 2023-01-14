import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadaverTransferRoutingModule } from './cadaver-transfer-routing.module';
import { CadaverTransferComponent } from './cadaver-transfer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    CadaverTransferComponent
  ],
  imports: [
    CommonModule,
    CadaverTransferRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class CadaverTransferModule { }
