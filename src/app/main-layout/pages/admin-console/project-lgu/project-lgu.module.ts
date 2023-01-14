import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLguComponent } from './project-lgu.component';
import { ProjectLguRoutingModule } from './project-lgu-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    ProjectLguRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [ProjectLguComponent]
})
export class ProjectLguModule { }
