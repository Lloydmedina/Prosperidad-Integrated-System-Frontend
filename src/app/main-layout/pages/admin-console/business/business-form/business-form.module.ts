import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessFormComponent } from './business-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { BusinessFormRoutingModule } from './business-form-routing.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    BusinessFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
   NgxMaskModule.forRoot()
  ],
  declarations: [BusinessFormComponent]
})
export class BusinessFormModule { }
