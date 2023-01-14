import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyCompositionFormComponent } from './family-composition-form.component';

const routes: Routes = [
  {
    path: "",
    component: FamilyCompositionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyCompositionFormRoutingModule { }
