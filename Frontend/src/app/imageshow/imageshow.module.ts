import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageshowRoutingModule } from './imageshow-routing.module';
import { ImageshowComponent } from './imageshow.component';

@NgModule({
  declarations: [ImageshowComponent],
  imports: [FormsModule, CommonModule, ImageshowRoutingModule]
})
export class ImageshowModule { }
