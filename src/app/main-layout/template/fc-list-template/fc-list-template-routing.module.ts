import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FcListTemplateComponent } from './fc-list-template.component';

const routes: Routes = [
  {
    path: "",
    component: FcListTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FcListTemplateRoutingModule { }
