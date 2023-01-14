import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLguFormComponent } from './project-lgu-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ProjectLguFormRoutingModule } from './project-lgu-form-routing.module';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  imports: [
  CommonModule,
   ProjectLguFormRoutingModule,
   ReactiveFormsModule,
   FormsModule,
   NgZorroModule,
   NgxMaskModule.forRoot()
  ],
  declarations: [ProjectLguFormComponent]
})
export class ProjectLguFormModule { }
