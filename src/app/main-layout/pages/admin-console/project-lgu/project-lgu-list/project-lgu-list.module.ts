import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLguListComponent } from './project-lgu-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { ProjectLguListRoutingModule } from './project-lgu-list-routing.module';
import { DateFilterModule } from 'src/app/main-layout/template/date-filter/date-filter.module';

@NgModule({
  imports: [
     CommonModule,
    ProjectLguListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    DateFilterModule
  ],
  declarations: [ProjectLguListComponent]
})
export class ProjectLguListModule { }
