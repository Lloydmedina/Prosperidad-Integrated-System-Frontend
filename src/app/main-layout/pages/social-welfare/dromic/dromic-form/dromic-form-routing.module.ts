import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DromicFormComponent } from './dromic-form.component';

const routes: Routes = [
  {
    path: "",
    component: DromicFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DromicFormRoutingModule { }
