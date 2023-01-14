import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlaughteringComponent } from './slaughtering.component';

const routes: Routes = [
  {
    path: "",
    component: SlaughteringComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlaughteringRoutingModule { }
