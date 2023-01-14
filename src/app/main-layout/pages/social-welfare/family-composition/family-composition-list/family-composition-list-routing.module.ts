import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyCompositionListComponent } from './family-composition-list.component';

const routes: Routes = [
  {
    path: "",
    component: FamilyCompositionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyCompositionListRoutingModule { }
