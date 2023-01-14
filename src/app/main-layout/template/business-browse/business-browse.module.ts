import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessBrowseComponent } from './business-browse.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { BusinessListRoutingModule } from '../../pages/admin-console/business/business-list/business-list-routing.module';
import { DateFilterModule } from '../date-filter/date-filter.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ],
  exports: [BusinessBrowseComponent],
  declarations: [BusinessBrowseComponent]
})
export class BusinessBrowseModule { }
