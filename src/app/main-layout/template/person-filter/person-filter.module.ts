import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonFilterComponent } from './person-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';



@NgModule({
  declarations: [
    PersonFilterComponent
  ],
  exports: [PersonFilterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class PersonFilterModule { }
