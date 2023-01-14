import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlaughteringFormComponent } from './slaughtering-form.component';

const routes: Routes = [
  {
    path: "",
    component: SlaughteringFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlaughteringFormRoutingModule { }
