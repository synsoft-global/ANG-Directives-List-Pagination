import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageshowComponent } from './imageshow.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: '',
    component: ImageshowComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageshowRoutingModule { }
