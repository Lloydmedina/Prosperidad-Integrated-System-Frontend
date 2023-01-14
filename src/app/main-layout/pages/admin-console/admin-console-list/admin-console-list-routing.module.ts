import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConsoleListComponent } from './admin-console-list.component';

const routes: Routes = [
  {
    path: "",
    component: AdminConsoleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminConsoleListRoutingModule { }
