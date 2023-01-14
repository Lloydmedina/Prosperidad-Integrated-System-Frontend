import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialWelfareRoutingModule } from './social-welfare-routing.module';
import { SocialWelfareComponent } from './social-welfare.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    SocialWelfareComponent
  ],
  imports: [
    CommonModule,
    SocialWelfareRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class SocialWelfareModule { }
