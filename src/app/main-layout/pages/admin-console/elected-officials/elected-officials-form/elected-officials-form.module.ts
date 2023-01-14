import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectedOfficialsFormComponent } from './elected-officials-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ElectedOfficialsFormRoutingModule } from './elected-officials-form-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ElectedOfficialsFormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [ElectedOfficialsFormComponent]
})
export class ElectedOfficialsFormModule { }
