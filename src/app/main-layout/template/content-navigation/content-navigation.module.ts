import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentNavigationComponent } from './content-navigation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';



@NgModule({
  declarations: [
    ContentNavigationComponent
  ],
  exports: [ContentNavigationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class ContentNavigationModule { }
