import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanResourceComponent } from './human-resource.component';
import { HumanResourceRoutingModule } from './human-resource-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    HumanResourceRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [HumanResourceComponent]
})
export class HumanResourceModule { }
