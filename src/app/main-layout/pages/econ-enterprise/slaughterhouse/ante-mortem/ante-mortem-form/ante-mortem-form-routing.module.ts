import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnteMortemFormComponent } from './ante-mortem-form.component';

const routes: Routes = [
  {
    path: "",
    component: AnteMortemFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnteMortemFormRoutingModule { }
