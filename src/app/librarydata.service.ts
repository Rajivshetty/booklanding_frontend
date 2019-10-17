import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class LibrarydataService {
  //apiUrl_login: string = "http://10.117.189.94";
  apiUrl_login: string = "http://http://13.233.173.243:9093";
  apiUrl: string = "http://10.117.189.192";

  constructor(private http: HttpClient) { }

  // To login
  login(userInfo) {
    console.log('UserInfo', userInfo);
    return this.http.post(this.apiUrl_login + '/library/api/login', userInfo)
      // .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server Error'));
  }

  registerUser(userDetails) {
    console.log('UserInfo', userDetails);
    return this.http.post(this.apiUrl_login + '/library/api/registration', userDetails)
      // .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server Error'));
  }

  addBooks(bookDetails) {
    console.log('UserInfo', bookDetails);
    return this.http.post(this.apiUrl_login + '/library/api/books', bookDetails)
      .catch((error: any) => Observable.throw(error || 'Server Error'));
  }

  borrowBook(bookDetails) {
    console.log('UserInfo', bookDetails);
    return this.http.post(this.apiUrl_login + '/library/api/issuedBooks', bookDetails)
      .catch((error: any) => Observable.throw(error || 'Server Error'));
  }

  requestBook(bookDetails) {
    console.log('UserInfo', bookDetails);
    return this.http.post(this.apiUrl_login + '/library/api/books', bookDetails)
      .catch((error: any) => Observable.throw(error || 'Server Error'));
  }

  getBookDetails(): Observable<any> {
    console.log('Into get Book Details Service');
    return this.http.get(this.apiUrl_login + '/library/api/books');
    // .map((res: Response) => res.json())
    // .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }
}
