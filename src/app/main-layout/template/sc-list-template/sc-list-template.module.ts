import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScListTemplateRoutingModule } from './sc-list-template-routing.module';
import { ScListTemplateComponent } from './sc-list-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ScFilterModule } from '../sc-filter/sc-filter.module';


@NgModule({
  declarations: [ScListTemplateComponent],
  imports: [
    CommonModule,
    ScListTemplateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ScFilterModule
  ]
})
export class ScListTemplateModule { }
