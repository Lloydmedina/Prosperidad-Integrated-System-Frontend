import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonPrintListComponent } from './person-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: PersonPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonPrintListRoutingModule { }
