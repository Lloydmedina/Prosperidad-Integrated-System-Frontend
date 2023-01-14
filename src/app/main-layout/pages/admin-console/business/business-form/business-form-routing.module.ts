import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessFormComponent } from './business-form.component';

const routes: Routes = [
  {
    path: "",
    component: BusinessFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessFormRoutingModule { }
