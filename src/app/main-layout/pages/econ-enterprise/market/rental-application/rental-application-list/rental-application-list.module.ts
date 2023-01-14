import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalApplicationListComponent } from './rental-application-list.component';
import { RentalApplicationListRoutingModule } from './rental-application-list-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    RentalApplicationListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [RentalApplicationListComponent]
})
export class RentalApplicationListModule { }
