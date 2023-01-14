import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndigentFormComponent } from './indigent-form.component';

const routes: Routes = [
  {
    path: "",
    component: IndigentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndigentFormRoutingModule { }
