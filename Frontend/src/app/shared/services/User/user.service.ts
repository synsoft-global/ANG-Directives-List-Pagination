import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CommonService } from '../common';
import { BASE_URL } from 'src/app/app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _commonService: CommonService, private http: HttpClient) { }

  /**
  * This Method is used for Get all User List
  * @param data
  * {
  *    search: String,
  * }
  */
  GetUserList(search) {
    this._commonService.showLoading(true);
    return this.http.get(BASE_URL + `/users?firstName_like=${search}`)
      .pipe(map((response: Response) => { this.onSuccess(); return response }))
      .pipe(catchError(this.handleError));;
  }

  private handleError(error: any) {
    this._commonService.showLoading(false);
    return throwError(error.json());
  }

  private onSuccess() {
    this._commonService.showLoading(false);
  }
}
