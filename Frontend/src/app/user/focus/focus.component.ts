import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.scss']
})

export class FocusComponent implements OnInit {
  subscriptions: any[] = [];      // stores all service subscriptions
  ElementId: string = '';         // Elemnet Id frm the url
  constructor(private _route: ActivatedRoute) { }

  /**
   * init component
   */
  ngOnInit() {
    /**
     * Get The Elemnet Id frm the url
   */
    this.subscriptions.push(this._route.params.subscribe(params => {
      this.ElementId = params['id'];
    }));
  }

  /**
   * function to destroy instance's subscriptions
   */
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
