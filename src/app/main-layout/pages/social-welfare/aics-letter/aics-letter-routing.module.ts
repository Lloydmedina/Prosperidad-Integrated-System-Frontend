import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AicsLetterComponent } from './aics-letter.component';

const routes: Routes = [
  {
    path: "",
    component: AicsLetterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AicsLetterRoutingModule { }
