import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SanitaryPermitListPrintComponent } from './sanitary-permit-list-print.component';

const routes: Routes = [
{
  path : "",
  component : SanitaryPermitListPrintComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanitaryPermitListPrintRoutingModule { }
