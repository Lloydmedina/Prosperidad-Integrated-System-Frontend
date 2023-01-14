import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostMortemListComponent } from './post-mortem-list.component';

const routes: Routes = [
  {
    path: "",
    component: PostMortemListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostMortemListRoutingModule { }
