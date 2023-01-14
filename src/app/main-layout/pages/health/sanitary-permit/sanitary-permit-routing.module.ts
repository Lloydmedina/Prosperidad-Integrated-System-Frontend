import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanitaryPermitComponent } from './sanitary-permit.component';

const routes: Routes = [
  {
    path: "",
    component: SanitaryPermitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanitaryPermitRoutingModule { }
