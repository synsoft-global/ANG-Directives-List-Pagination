import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AutoselectboxComponent } from './autoselectbox/autoselectbox.component';
import { FocusComponent } from './focus/focus.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserComponent, AutoselectboxComponent, FocusComponent],
  imports: [FormsModule, CommonModule,
    UserRoutingModule, NgxPaginationModule, SharedModule]
})

export class UserModule { }
