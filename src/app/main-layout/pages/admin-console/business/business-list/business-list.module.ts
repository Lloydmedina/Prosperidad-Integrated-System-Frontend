import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessListComponent } from './business-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { BusinessListRoutingModule } from './business-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BusinessListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ],
  declarations: [BusinessListComponent]
})
export class BusinessListModule { }
