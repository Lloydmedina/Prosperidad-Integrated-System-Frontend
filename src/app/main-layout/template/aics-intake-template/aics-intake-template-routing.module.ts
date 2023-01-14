import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsIntakeTemplateComponent } from './aics-intake-template.component';

const routes: Routes = [
  {
    path: "",
    component: AicsIntakeTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsIntakeTemplateRoutingModule { }
