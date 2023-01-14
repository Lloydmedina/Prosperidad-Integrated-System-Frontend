import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectedOfficialsFormComponent } from './elected-officials-form.component';

const routes: Routes = [
  {
    path: "",
    component: ElectedOfficialsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectedOfficialsFormRoutingModule { }
