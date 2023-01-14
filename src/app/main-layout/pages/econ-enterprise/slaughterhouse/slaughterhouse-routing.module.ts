import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlaughterhouseComponent } from './slaughterhouse.component';

const routes: Routes = [
  {
    path: "",
    component: SlaughterhouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlaughterhouseRoutingModule { }
