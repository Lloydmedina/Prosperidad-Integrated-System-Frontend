import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanitaryPermitListComponent } from './sanitary-permit-list.component';

const routes: Routes = [
  {
    path: "",
    component: SanitaryPermitListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanitaryPermitListRoutingModule { }
