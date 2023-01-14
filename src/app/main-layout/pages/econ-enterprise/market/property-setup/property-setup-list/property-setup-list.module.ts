import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertySetupListComponent } from './property-setup-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { PropertySetupListRoutingModule } from './property-setup-list-routing.module';
import { ContentNavigationComponent } from 'src/app/main-layout/template/content-navigation/content-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    PropertySetupListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [PropertySetupListComponent]
})
export class PropertySetupListModule { }
