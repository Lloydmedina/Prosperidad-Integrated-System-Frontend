import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionFormComponent } from './position-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PositionFormRoutingModule } from './position-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PositionFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [PositionFormComponent]
})
export class PositionFormModule { }
