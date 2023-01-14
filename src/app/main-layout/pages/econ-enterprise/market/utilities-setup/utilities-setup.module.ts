import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesSetupComponent } from './utilities-setup.component';
import { UtilitiesSetupRoutingModule } from './utilities-setup-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    UtilitiesSetupRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule,
  ],
  declarations: [UtilitiesSetupComponent]
})
export class UtilitiesSetupModule { }
