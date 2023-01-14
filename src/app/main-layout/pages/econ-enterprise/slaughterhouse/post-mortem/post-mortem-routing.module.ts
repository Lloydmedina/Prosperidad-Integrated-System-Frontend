import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostMortemComponent } from './post-mortem.component';

const routes: Routes = [
  {
    path: "",
    component: PostMortemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostMortemRoutingModule { }
