import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WccInterventionUndertakenRoutingModule } from './wcc-intervention-undertaken-routing.module';
import { WccInterventionUndertakenComponent } from './wcc-intervention-undertaken.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    WccInterventionUndertakenComponent
  ],
  imports: [
    CommonModule,
    WccInterventionUndertakenRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class WccInterventionUndertakenModule { }
