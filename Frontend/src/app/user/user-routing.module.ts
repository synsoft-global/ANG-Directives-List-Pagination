import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { FocusComponent } from './focus/focus.component';
import { AutoselectboxComponent } from './autoselectbox/autoselectbox.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: '',
    component: UserComponent,
  },
  {
    path: 'focus/:id',
    component: FocusComponent,
  },
  {
    path: 'autoselect',
    component: AutoselectboxComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
