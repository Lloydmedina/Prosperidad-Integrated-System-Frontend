import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminConsoleListRoutingModule } from './admin-console-list-routing.module';
import { AdminConsoleListComponent } from './admin-console-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';


@NgModule({
  declarations: [
    AdminConsoleListComponent
  ],
  imports: [
    CommonModule,
    AdminConsoleListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class AdminConsoleListModule { }
