import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlaughteringFormComponent } from './slaughtering-form.component';
import { SlaughteringFormRoutingModule } from './slaughtering-form-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ReceivingModule } from '../../receiving/receiving.module';
import { ReceivingBrowseModule } from 'src/app/main-layout/template/receiving-browse/receiving-browse.module';

@NgModule({
  imports: [
    CommonModule,
    SlaughteringFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [SlaughteringFormComponent]
})
export class SlaughteringFormModule { }
