import {Platform} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';



@Injectable()
export class CompanyProvider {

  email: any;
 
  constructor(
    public http: HttpClient,  
    private storage:Storage, 
    private platform:Platform
  ) {
        this.platform.ready().then(() => {
          this.getEmail();
        });
  }

  // Here we call getEmail
getUserData(): Observable<any>{
this.getEmail();
return this.http
.get(`http://localhost:3000/api/home/${this.email}`);
//backtick is for template strings
  }


  getUserDataByEmail(email): Observable<any>{
    return this.http
    .get(`http://localhost:3000/api/home/${email}`);
    //backtick is for template strings
  }

  async getUserEmail() {
    return await this.storage.get('useremail')
  }


getEmail(){
  this.storage.get('useremail').then(value=> {
    //console.log(value);
    this.email = value;
  });
}

// ? is an optional parameter

  createCompany(name, address, city, state, zipcode, country, sector, website, userId?): Observable<any> {
    return this.http
      .post('http://localhost:3000/api/company/create', {
        name,
        address,
        city,
        state,
        zipcode,
        country,
        sector,
        website,
        userId,
      });
  }
getCompanies(): Observable<any>{
  return this.http
.get('http://localhost:3000/api/companies/all');
}
//method
addCompanyReview(companyId, culture, benefits, balance, speed, overall, review, userId):Observable<any>{
  return this.http 
  .post('http://localhost:3000/api/company/review', {
companyId,
culture,
benefits,
balance,
speed,
overall,
review,
userId
});
}

registerEmployee(company, user, role): Observable<any>{
  return this.http
    .post('https://ratingapi.herokuapp.com/api/register/employee', {
      company: company,
      user: user,
      role: role
    });
  }
}















