import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscaComponent } from './osca.component';

const routes: Routes = [
  {
    path: "",
    component: OscaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OscaRoutingModule { }
