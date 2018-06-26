import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable'; 

@Injectable()
export class RegisterProvider {

  constructor(public http: HttpClient) {

  }

  registerUser(fullname, email, password): Observable<any>{
return this.http
.post('http://localhost:3000/api/signup/user' , {
  fullname: fullname,
  email: email, 
  password: password
});

}
}
