import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndigentListTemplateComponent } from './indigent-list-template.component';

const routes: Routes = [
  {
    path: "",
    component: IndigentListTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndigentListTemplateRoutingModule { }
