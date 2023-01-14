import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlaughterhouseRecordsComponent } from './slaughterhouse-records.component';

const routes: Routes = [
  {
    path: "",
    component: SlaughterhouseRecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlaughterhouseRecordsRoutingModule { }
