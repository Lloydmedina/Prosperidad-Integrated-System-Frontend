import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoloParentComponent } from './solo-parent.component';

const routes: Routes = [
  {
    path: "",
    component: SoloParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoloParentRoutingModule { }
