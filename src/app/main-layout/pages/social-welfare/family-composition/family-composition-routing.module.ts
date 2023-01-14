import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyCompositionComponent } from './family-composition.component';

const routes: Routes = [
  {
    path: "",
    component: FamilyCompositionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyCompositionRoutingModule { }
