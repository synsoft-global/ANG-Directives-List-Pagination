import { Component } from '@angular/core';
import { CommonService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  isLoading: boolean;
  subscriptions: any[] = [];
  constructor(private _commonService: CommonService) {
    this.subscriptions.push(this._commonService.loadingPropertyChanged$.subscribe(
      data => {
        this.isLoading = data;
    }));
  }

  /**
   * function to destroy instance's subscriptions
   */
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
