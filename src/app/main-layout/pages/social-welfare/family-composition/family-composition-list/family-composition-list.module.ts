import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyCompositionListRoutingModule } from './family-composition-list-routing.module';
import { FamilyCompositionListComponent } from './family-composition-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';


@NgModule({
  declarations: [
    FamilyCompositionListComponent
  ],
  imports: [
    CommonModule,
    FamilyCompositionListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ]
})
export class FamilyCompositionListModule { }
