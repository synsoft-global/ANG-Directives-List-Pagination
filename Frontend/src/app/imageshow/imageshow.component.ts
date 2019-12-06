import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageshow',
  templateUrl: './imageshow.component.html',
  styleUrls: ['./imageshow.component.scss']
})
export class ImageshowComponent implements OnInit {
  imagesrc: string;
  imgageurl: string;

  constructor() { }

  /**
   * init component
   */
  ngOnInit() { }

  /**
   * function is use for Change the image path
   */
  onChangeimage() {
    this.imagesrc = this.imgageurl;
  }

}
