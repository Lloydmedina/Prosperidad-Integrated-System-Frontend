import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalApplicationComponent } from './rental-application.component';
import { RentalApplicationRoutingModule } from './rental-application-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    RentalApplicationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ],
  declarations: [RentalApplicationComponent]
})
export class RentalApplicationModule { }
