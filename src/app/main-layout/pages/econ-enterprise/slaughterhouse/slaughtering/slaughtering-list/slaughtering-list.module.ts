import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlaughteringListComponent } from './slaughtering-list.component';
import { SlaughteringListRoutingModule } from './slaughtering-list-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

@NgModule({
  imports: [
    CommonModule,
    SlaughteringListRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule
  ],
  declarations: [SlaughteringListComponent]
})
export class SlaughteringListModule { }
