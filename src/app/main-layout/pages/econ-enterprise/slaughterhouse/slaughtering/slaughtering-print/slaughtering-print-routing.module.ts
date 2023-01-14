import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlaughteringPrintComponent } from './slaughtering-print.component';

const routes: Routes = [
  {
    path: "",
    component: SlaughteringPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SlaughteringPrintRoutingModule { }
