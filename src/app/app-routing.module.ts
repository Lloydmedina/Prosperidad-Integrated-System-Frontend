import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from 'src/core/core-page/not-found-page/not-found-page.component';
import { UnauthorizedComponent } from 'src/core/core-page/unauthorized/unauthorized.component';
import { LoggedInGuardGuard } from 'src/core/guard/logged-in-guard/logged-in-guard.guard';
import { LoginGuard } from 'src/core/guard/login-guard/login.guard';

const routes: Routes = [
  {
    path: "", 
    pathMatch: 'full', 
    redirectTo: "login"
  },
  {
    path: "main",
    canActivate: [LoginGuard],
    loadChildren: () =>
      import("./main-layout/main-layout.module").then(
        main => main.MainLayoutModule
      )
  },
  {
    path: "login",
    canActivate: [LoggedInGuardGuard],
    data: {title: 'Login', name: 'Elf Books'},
    loadChildren: () =>
      import("../core/core-page/login/login.module").then(login => login.LoginModule)
  },
  // {
  //   path: "forgot-password",
  //   data: {title: 'Forgot', name: 'Elf Books'},
  //   loadChildren: () =>
  //     import("./core/forgot-password/forgot-password.module").then(forgot => forgot.ForgotPasswordModule)
  // },
  { path: '403', component: UnauthorizedComponent },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
