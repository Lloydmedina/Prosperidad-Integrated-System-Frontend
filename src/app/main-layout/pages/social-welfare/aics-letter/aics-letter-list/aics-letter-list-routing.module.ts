import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsLetterListComponent } from './aics-letter-list.component';

const routes: Routes = [
  {
    path: "",
    component: AicsLetterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsLetterListRoutingModule { }
