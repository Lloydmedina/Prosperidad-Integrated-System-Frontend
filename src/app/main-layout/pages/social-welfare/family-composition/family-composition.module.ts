import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyCompositionRoutingModule } from './family-composition-routing.module';
import { FamilyCompositionComponent } from './family-composition.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    FamilyCompositionComponent
  ],
  imports: [
    CommonModule,
    FamilyCompositionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class FamilyCompositionModule { }
