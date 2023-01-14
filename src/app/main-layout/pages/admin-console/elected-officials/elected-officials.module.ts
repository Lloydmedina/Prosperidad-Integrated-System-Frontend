import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectedOfficialsComponent } from './elected-officials.component';
import { ElectedOfficialsRoutingModule } from './elected-officials-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [  CommonModule,
    ElectedOfficialsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [ElectedOfficialsComponent]
})
export class ElectedOfficialsModule { }
