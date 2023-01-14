import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectedOfficialsPrintComponent } from './elected-officials-print.component';

const routes: Routes = [
  {
    path: "",
    component: ElectedOfficialsPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectedOfficialsPrintRoutingModule { }
