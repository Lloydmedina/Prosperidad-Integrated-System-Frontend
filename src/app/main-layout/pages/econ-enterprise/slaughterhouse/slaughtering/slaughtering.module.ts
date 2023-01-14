import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlaughteringComponent } from './slaughtering.component';
import { SlaughteringRoutingModule } from './slaughtering-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContentNavigationModule } from 'src/app/main-layout/template/content-navigation/content-navigation.module';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    SlaughteringRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    ContentNavigationModule
  ],
  declarations: [SlaughteringComponent]
})
export class SlaughteringModule { }
