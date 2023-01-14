import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyCompositionFormRoutingModule } from './family-composition-form-routing.module';
import { FamilyCompositionFormComponent } from './family-composition-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PersonsBrowseModule } from 'src/app/main-layout/template/persons-browse/persons-browse.module';
import { LocaleCurrencyInputModule } from 'locale-currency-input';


@NgModule({
  declarations: [
    FamilyCompositionFormComponent
  ],
  imports: [
    CommonModule,
    FamilyCompositionFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    PersonsBrowseModule,
    LocaleCurrencyInputModule
  ]
})
export class FamilyCompositionFormModule { }
