import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsBrowseComponent } from './persons-browse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonFilterModule } from '../person-filter/person-filter.module';



@NgModule({
  declarations: [
    PersonsBrowseComponent
  ],
  exports: [PersonsBrowseComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonFilterModule
  ]
})
export class PersonsBrowseModule { }
