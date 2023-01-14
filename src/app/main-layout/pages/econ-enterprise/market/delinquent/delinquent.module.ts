import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelinquentComponent } from './delinquent.component';
import { DelinquentRoutingModule } from './delinquent-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    DelinquentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ],
  declarations: [DelinquentComponent]
})
export class DelinquentModule { }
