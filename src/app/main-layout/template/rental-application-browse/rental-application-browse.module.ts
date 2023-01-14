import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalApplicationBrowseComponent } from './rental-application-browse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from '../date-filter/date-filter.module';



@NgModule({
  declarations: [RentalApplicationBrowseComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class RentalApplicationBrowseModule { }
