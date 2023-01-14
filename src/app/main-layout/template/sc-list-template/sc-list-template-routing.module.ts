import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScListTemplateComponent } from './sc-list-template.component';

const routes: Routes = [
  {
    path: "",
    component: ScListTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScListTemplateRoutingModule { }
