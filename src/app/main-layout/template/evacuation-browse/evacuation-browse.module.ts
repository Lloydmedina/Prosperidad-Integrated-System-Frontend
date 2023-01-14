import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvacuationBrowseComponent } from './evacuation-browse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';



@NgModule({
  declarations: [
    EvacuationBrowseComponent
  ],
  exports: [EvacuationBrowseComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ]
})
export class EvacuationBrowseModule { }
