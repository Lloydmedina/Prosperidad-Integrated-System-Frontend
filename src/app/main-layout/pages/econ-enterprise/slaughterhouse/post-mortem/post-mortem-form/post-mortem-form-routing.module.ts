import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostMortemFormComponent } from './post-mortem-form.component';

const routes: Routes = [
  {
    path: "",
    component: PostMortemFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostMortemFormRoutingModule { }
