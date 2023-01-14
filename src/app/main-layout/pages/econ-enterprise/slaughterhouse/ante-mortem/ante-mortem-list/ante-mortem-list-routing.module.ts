import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnteMortemListComponent } from './ante-mortem-list.component';

const routes: Routes = [
  {
    path: "",
    component: AnteMortemListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnteMortemListRoutingModule { }
