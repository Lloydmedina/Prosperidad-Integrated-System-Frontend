import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SequencerComponent } from './sequencer.component';

const routes: Routes = [
  {
    path: "",
    component: SequencerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SequencerRoutingModule { }
