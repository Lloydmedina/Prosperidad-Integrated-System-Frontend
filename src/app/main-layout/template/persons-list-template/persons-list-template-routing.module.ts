import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsListTemplateComponent } from './persons-list-template.component';

const routes: Routes = [
  {
    path: "",
    component: PersonsListTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsListTemplateRoutingModule { }
