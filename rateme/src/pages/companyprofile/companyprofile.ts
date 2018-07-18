import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-companyprofile',
  templateUrl: 'companyprofile.html',
})
export class CompanyprofilePage {

  profile: any;
  user: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    //private alerCtrl: AlertController,
    //private company: CompanyProvider,
    //private toastCtrl: ToastController
  ) {
    this.profile = this.navParams.get("data");
  }

  ionViewDidLoad()  {

  }
  
  ReviewPage(profile){
    this.navCtrl.push("ReviewPage", {"data":profile});
  }

  }