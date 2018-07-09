import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';



@Injectable()
export class CompanyProvider {

  email: any;
 
  constructor(
    public http: HttpClient,  private storage:Storage) {
        
  }

  // Here we call getEmail
getUserData(): Observable<any>{
this.getEmail();
return this.http
.get(`http://localhost:3000/api/home/${this.email}`);
//backtick is for template strings
  }


getEmail(){
  this.storage.get('useremail').then(value=> {
    this.email = value;
  });
}

// ? is an optional parameter

  createCompany(name, address, city, country, sector, website, userId?): Observable<any> {
    return this.http
      .post('http://localhost:3000/api/company/create', {
        name,
        address,
        city,
        country,
        sector,
        website,
        userId
      });
  }

}















