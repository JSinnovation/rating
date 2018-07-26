import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';
@IonicPage()
@Component({
  selector: 'page-viewreviews',
  templateUrl: 'viewreviews.html',
})
export class ViewreviewsPage {

  company: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.company=this.navParams.get("companyData");
   console.log(this.company)
  }

  ionViewDidLoad() {
  
  }
  averageRating(arr){
if(arr.length<=0){
  return arr.length;
}else{
  return _.mean(arr);
}
}
}

