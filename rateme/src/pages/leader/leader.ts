import { CompanyProvider } from './../../providers/company/company';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-leader',
  templateUrl: 'leader.html',
})
export class LeaderPage {

  companies = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private company: CompanyProvider
  ) {
  }
  companyProfile(company){
    //console.log(company)
     this.navCtrl.push("CompanyprofilePage", {"data": company});
     // this.navCtrl.push('CreatecorporationPage')
     }
     
  ionViewDidLoad() {
    this.company.leaderBoard()
      .subscribe(res => {
       
     this.companies = res.result;
      })
  }

}
