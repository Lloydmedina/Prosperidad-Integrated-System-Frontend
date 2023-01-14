import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsComponent } from './aics.component';

const routes: Routes = [
  {
    path: "",
    component: AicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsRoutingModule { }
