import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostMortemPrintFormComponent } from './post-mortem-print-form.component';

const routes: Routes = [
  {
    path: "",
    component: PostMortemPrintFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostMortemPrintFormRoutingModule { }
