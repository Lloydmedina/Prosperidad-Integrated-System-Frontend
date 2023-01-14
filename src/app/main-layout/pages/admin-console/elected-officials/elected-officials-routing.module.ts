import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectedOfficialsComponent } from './elected-officials.component';

const routes: Routes = [
  {
    path: "",
    component: ElectedOfficialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectedOfficialsRoutingModule { }
