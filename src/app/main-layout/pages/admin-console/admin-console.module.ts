import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminConsoleRoutingModule } from './admin-console-routing.module';
import { AdminConsoleComponent } from './admin-console.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    AdminConsoleComponent
  ],
  imports: [
    CommonModule,
    AdminConsoleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class AdminConsoleModule { }
