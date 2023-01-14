import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WccCtAddComponent } from './wcc-ct-add.component';

const routes: Routes = [
  {
    path : "",
    component : WccCtAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WccCtAddRoutingModule { }
