import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CompanyProvider } from '../../providers/company/company';

@IonicPage()
@Component({
  selector: 'page-review',
  templateUrl: 'review.html',
})

export class ReviewPage {

  culture:number;
  benefits:number;
  balance:number;
  speed:number;
  overall:number;
  review:string;
  userid:any;
  
companyProfile: any;
name: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private company:CompanyProvider,
    private toastCtrl:ToastController
  ) {
 this.companyProfile = this.navParams.get("data");
this.name = this.companyProfile.companyname;
  }
 
  ionViewDidLoad() {
    this.company.getEmail().then(result => {
      this.getData(result);
    })
  }

  addReview(){
this.company.addCompanyReview(this.companyProfile._id,this.culture,this.benefits,this.balance, this.speed, this.overall, this.review,this.userid)
//res are the results
.subscribe(res =>{
  //console.log(res.user);
  if(res.message){
    let toast = this.toastCtrl.create({
      message: res.message,
      duration: 3000,
      position: "bottom"
    });

    toast.present();
   // console.log(res)
     }
     if(res.error){
     //console.log(res)
     let toast = this.toastCtrl.create({
      message: res.error,
      duration: 3000,
      position: "bottom"
    });

    toast.present();
    }
});

this.review = '';
  }
  
 


   getData(email){
     this.company.getUserData(email)
       .subscribe(res => {
              if (res.user!==null){
          this.userid = res.user._id;
         }
      });
     
   } 
  }


