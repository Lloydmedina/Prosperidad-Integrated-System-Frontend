import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnteMortemComponent } from './ante-mortem.component';

const routes: Routes = [
  {
    path: "",
    component: AnteMortemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnteMortemRoutingModule { }
