import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanitaryPermitRoutingModule } from './sanitary-permit-routing.module';
import { SanitaryPermitComponent } from './sanitary-permit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SanitaryPermitRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class SanitaryPermitModule { }
