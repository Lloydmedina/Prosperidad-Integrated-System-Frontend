import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceivingComponent } from './receiving.component';
import { ReceivingRoutingModule } from './receiving-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    ReceivingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ],
  declarations: [ReceivingComponent]
})
export class ReceivingModule { }
