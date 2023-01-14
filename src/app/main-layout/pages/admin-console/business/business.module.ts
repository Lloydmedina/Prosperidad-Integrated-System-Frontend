import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { BusinessRoutingModule } from './business-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BusinessRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [BusinessComponent]
})
export class BusinessModule { }
