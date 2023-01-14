import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsAddTemplateComponent } from './persons-add-template.component';

const routes: Routes = [
  {
    path: "",
    component: PersonsAddTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonsAddTemplateRoutingModule { }
