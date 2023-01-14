import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertySetupComponent } from './property-setup.component';
import { PropertySetupRoutingModule } from './property-setup-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonFilterModule } from 'src/app/main-layout/template/person-filter/person-filter.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';

@NgModule({
  imports: [
    CommonModule,
    PropertySetupRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ],
  declarations: [PropertySetupComponent]
})
export class PropertySetupModule { }
