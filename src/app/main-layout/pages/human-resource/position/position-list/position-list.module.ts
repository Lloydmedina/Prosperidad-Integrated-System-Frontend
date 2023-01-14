import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionListComponent } from './position-list.component';
import { PositionListRoutingModule } from './position-list-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import {DragDropModule} from '@angular/cdk/drag-drop'
@NgModule({
  imports: [
    CommonModule,
    PositionListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DragDropModule
  ],
  declarations: [PositionListComponent]
})
export class PositionListModule { }
