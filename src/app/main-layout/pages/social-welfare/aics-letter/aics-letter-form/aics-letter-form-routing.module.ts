import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsLetterFormComponent } from './aics-letter-form.component';

const routes: Routes = [
  {
    path: "",
    component: AicsLetterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsLetterFormRoutingModule { }
