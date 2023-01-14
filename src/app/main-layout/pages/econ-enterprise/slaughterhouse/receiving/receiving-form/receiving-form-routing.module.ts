import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceivingFormComponent } from './receiving-form.component';

const routes: Routes = [
  {
    path: "",
    component: ReceivingFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceivingFormRoutingModule { }
