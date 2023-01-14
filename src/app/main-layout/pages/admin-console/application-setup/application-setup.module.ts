import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationSetupRoutingModule } from './application-setup-routing.module';
import { ApplicationSetupComponent } from './application-setup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    ApplicationSetupComponent
  ],
  imports: [
    CommonModule,
    ApplicationSetupRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ApplicationSetupModule { }
