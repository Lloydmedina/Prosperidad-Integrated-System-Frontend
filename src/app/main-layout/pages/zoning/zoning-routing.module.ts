import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoningComponent } from './zoning.component';

const routes: Routes = [
  {
    path: "",
    component: ZoningComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZoningRoutingModule { }
