import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlaughteringListComponent } from './slaughtering-list.component';

const routes: Routes = [
  {
    path: "",
    component: SlaughteringListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlaughteringListRoutingModule { }
