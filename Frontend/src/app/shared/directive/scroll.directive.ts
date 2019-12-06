import { Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnInit {
  @Input('appScroll') appScroll: string;

  ngOnInit() {
    this.onElementChange();
  }

  onElementChange() {
    let els = document.querySelector('#' + this.appScroll);
    if (els != null) {
      els.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }  
}
