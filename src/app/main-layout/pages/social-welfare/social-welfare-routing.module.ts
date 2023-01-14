import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialWelfareComponent } from './social-welfare.component';

const routes: Routes = [
  {
    path: "",
    component: SocialWelfareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialWelfareRoutingModule { }
