import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RegisterProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RegisterProvider Provider');
  }

  registerUser(fullname,email,password):Observable<any>{
    return this.http
    .post('http://localhost:3000/api/signup/user',{
        fullname:fullname,
        email:email,
        password:password
    })
  }

}
