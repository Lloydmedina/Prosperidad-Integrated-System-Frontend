import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesSetupListComponent } from './utilities-setup-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { UtilitiesSetupListRoutingModule } from './utilities-setup-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UtilitiesSetupListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [UtilitiesSetupListComponent]
})
export class UtilitiesSetupListModule { }
