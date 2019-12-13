import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services';
import { of, Subject } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, flatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-autoselectbox',
  templateUrl: './autoselectbox.component.html',
  styleUrls: ['./autoselectbox.component.scss']
})
export class AutoselectboxComponent implements OnInit {
  subscriptions: any[] = [];      // stores all service subscriptions
  UserList: any[] = [];           // stores all User list
  public keyUp = new Subject<string>();
  searchcontent: string;
  constructor(private _toastr: ToastrService, private _UserService: UserService) {
    /**
     * Handling Search Input Keyup Event
     */
    this.keyUp
      .pipe(map(event => event))
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .pipe(flatMap((value) => {
        return of(this.FetchItemDetailsSearch(value)).pipe(delay(50))
      }))
      .subscribe(console.log);
  }

  /**
   * init component
   */
  ngOnInit() {
    this.FetchItemDetailsSearch();
  }

  /**
 * Get List User
 */
  FetchItemDetailsSearch(searchText = "") {
    this.subscriptions.push(this._UserService.GetUserList(searchText).subscribe((res: any) => {
      if (res) {
        this.UserList = res.body; //Bind to view
      } else {
        this.UserList = [];
        this.showError('Something Went Wrong');
      }
    },
      err => {
        this.showError('Please Start Mock Json Server');
      }
    ));
  }

  /**
  * function to show error message
  */
  showError(message) {
    this._toastr.clear();
    this._toastr.error('', message);
  }

  /**
  * function to destroy instance's subscriptions
  */
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
