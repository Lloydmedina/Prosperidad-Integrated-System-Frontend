import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostMortemPrintListComponent } from './post-mortem-print-list.component';

const routes: Routes = [
  {
    path: "",
    component: PostMortemPrintListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostMortemPrintListRoutingModule { }
