import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionComponent } from './position.component';
import { PositionRoutingModule } from './position-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    PositionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ],
  declarations: [PositionComponent]
})
export class PositionModule { }
