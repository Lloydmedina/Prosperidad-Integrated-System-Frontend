import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleOfFeesComponent } from './schedule-of-fees.component';

const routes: Routes = [
  {
    path: "",
    component: ScheduleOfFeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleOfFeesRoutingModule { }
