import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService, Validator } from '../shared/services';
import { PAGE_No, Page_Size } from '../app.constants';
import { of, Subject } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, flatMap, delay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  subscriptions: any[] = [];      // stores all service subscriptions
  UserList: any[] = [];           // stores all User list
  totalcount: number;             // Total Number of User List Count
  PageNo: number;                 // Default Page Number
  PageSize: number;               // Default Page Size
  searchText: string = '';
  ElementId: string = '';
  public keyUp = new Subject<string>();

  constructor(private _toastr: ToastrService,
    private _UserService: UserService, private _route: ActivatedRoute) {

    /**
     * Handling Search Input Keyup Event
     */
    this.keyUp
      .pipe(map(event => event))
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .pipe(flatMap((value) => {
        return of(this.GetUserList()).pipe(delay(50))
      }))
      .subscribe(console.log);
  }

  /**
   * init component
   */
  ngOnInit() {
    this.PageNo = PAGE_No;  // Default Page Number
    this.PageSize = Page_Size; // Default Page Size
    this.GetUserList(); // When Page Load call the function to get all user list
  }

  /**
  * Get List User
  */
  GetUserList() {
    this.subscriptions.push(this._UserService.GetUserList(this.searchText, this.PageNo, this.PageSize).subscribe((res: any) => {
      if (res) {
        this.totalcount = res.headers.get('X-Total-Count');
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
  * Use for pagination
  * @param  {number} page: page number
  */
  Paging(page: number) {
    this.PageNo = page;
    this.GetUserList();
  };

  /**
  * Use for pagination
  * @param  {number} PageSize: page Size
  */
  onPageSizeChange(val) {
    this.PageNo = PAGE_No
    this.PageSize = val;
    this.GetUserList();
  }

  /**
  * Get the filtered list
  * @param  {String} col: column name
  */
  onSearchTextChange(value) {
    this.PageNo = PAGE_No;
    this.PageSize = Page_Size;
    value = Validator.trimSpaces(value);
    this.keyUp.next(value);
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
