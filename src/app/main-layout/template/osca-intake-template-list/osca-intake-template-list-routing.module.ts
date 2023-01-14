import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscaIntakeTemplateListComponent } from './osca-intake-template-list.component';

const routes: Routes = [
  {
    path: "",
    component: OscaIntakeTemplateListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OscaIntakeTemplateListRoutingModule { }
