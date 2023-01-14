import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SequencerComponent } from './sequencer.component';
import { SequencerRoutingModule } from './sequencer-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import {DragDropModule} from '@angular/cdk/drag-drop'

@NgModule({
  imports: [
    CommonModule,
    SequencerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DragDropModule
  ],
  declarations: [SequencerComponent]
})
export class SequencerModule { }
