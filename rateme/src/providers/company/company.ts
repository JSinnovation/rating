import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const BASEURL = 'http://localhost:3000/api';

@Injectable()
export class CompanyProvider {
 
  constructor(
    public http: HttpClient,  
    private storage:Storage, 
   
   
  ) {
       
  }

  // Here we call getEmail
getUserData(email): Observable<any>{

return this.http
.get(`${BASEURL}/home/${email}`);
//backtick is for template strings
  }


  getUserDataByEmail(email): Observable<any>{
    return this.http
    .get(`http://localhost:3000/api/home/${email}`);
    //backtick is for template strings
  }

  async getEmail() {
    return await this.storage.get('useremail');
    //returns a promise
  }


  createCompany(
    name, 
    address, 
    city, 
    state, 
    zipcode, 
    country, 
    sector, 
    website, 
    userId?
  ): Observable<any> {
    return this.http.post(`${BASEURL}/company/create`, {
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
   // .post('https://ratingapi.herokuapp.com/api/register/employee', {
      .post('http://localhost:3000/api/register/employee', {
      company: company,
      user: user,
      role: role
    });
  }
uploadImage(user, image): Observable<any>{
  return this.http 
  .post('http://localhost:3000/api/v1/profile/upload',{
    user: user,
    image: image
  });
}
//method
uploadLogo(id, image): Observable<any>{
  return this.http 
  .post('http://localhost:3000/api/v1/company/upload',{
    company: id,
    image: image
  });

}

searchCompany(company):Observable<any>{
  return this.http.post('http://localhost:3000/api/search-company',{
    company: company
  });
}

leaderBoard(): Observable<any>{
  return this.http
  .get('http://localhost:3000/api/companies/leaderboard');
} 

}















