import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanitaryPermitFormNewRoutingModule } from './sanitary-permit-form-new-routing.module';
import { SanitaryPermitFormNewComponent } from './sanitary-permit-form-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    SanitaryPermitFormNewComponent
  ],
  imports: [
    CommonModule,
    
    SanitaryPermitFormNewRoutingModule,
    ReactiveFormsModule,
    NgZorroModule,
    NgxMaskModule.forRoot()
  ]
})
export class SanitaryPermitFormNewModule { }
