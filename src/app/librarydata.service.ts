import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class LibrarydataService {

  constructor(private http: HttpClient) { }

  login(userInfo) {
    console.log('UserInfo', userInfo);
    return this.http.post('http://10.117.189.94:9093/library/api/login', userInfo)
      // .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server Error'));
  }

  getBooks() {
    return this.http.get('http://api/books')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  registerUser(userDetails) {
    console.log('UserInfo', userDetails);
    return this.http.post('http://10.117.189.237:9093/library/api/registration', userDetails)
      // .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'Server Error'));
  }

  getBookDetails(): Observable<any> {
    console.log('Into get Book Details Service');
    return this.http.get('http://10.117.189.237:9093/library/api/books');
    // .map((res: Response) => res.json())
    // .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }
}
