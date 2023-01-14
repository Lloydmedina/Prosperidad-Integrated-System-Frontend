import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomainFormComponent } from './domain-form.component';

const routes: Routes = [
  {
    path: "",
    component: DomainFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainFormRoutingModule { }
