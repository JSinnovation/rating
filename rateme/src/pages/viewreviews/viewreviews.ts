import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';
import  moment from 'moment';
@IonicPage()
@Component({
  selector: 'page-viewreviews',
  templateUrl: 'viewreviews.html',
})
export class ViewreviewsPage {

  company: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.company=this.navParams.get("companyData");
  
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
GetReviewTime(time: number){
  //define function call and set it equal to function with whatever parameter you want to pass
return moment(time).fromNow();

  }
}