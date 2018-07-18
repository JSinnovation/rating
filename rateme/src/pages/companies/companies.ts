import { CompanyProvider } from '../../providers/company/company';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-companies',
  templateUrl: 'companies.html',
})
export class CompaniesPage {

companies = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private company: CompanyProvider
  ) {
  }

  ionViewDidLoad(){
  this.getAllCompanies() ; 
  }


// new method
getAllCompanies(){
this.company.getCompanies()
//we subscribe because it has an observable
.subscribe(res => {
//res is an array and we are setting it to another array
  this.companies = res.result
})

}
  
companyProfile(company){
 console.log(company)
  this.navCtrl.push("CompanyprofilePage", {"data": company});
  // this.navCtrl.push('CreatecorporationPage')
  }
}
 