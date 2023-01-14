import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectedOfficialsListComponent } from './elected-officials-list.component';
import { ElectedOfficialsListRoutingModule } from './elected-officials-list-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    ElectedOfficialsListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ],
  declarations: [ElectedOfficialsListComponent]
})
export class ElectedOfficialsListModule { }
