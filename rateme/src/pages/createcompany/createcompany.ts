import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { CompanyProvider } from '../../providers/company/company';

@IonicPage()
@Component({
  selector: 'page-createcompany',
  templateUrl: 'createcompany.html',
})
export class CreatecompanyPage {

name: string;
address: string;
city: string;
state: string;
zipcode: string;
country: string;
sector: string;
website: string;
userId: any;

userData: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private company: CompanyProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    this.company.getUserEmail().then(value => {
      this.GetUserData(value);
    })
  }

   ionViewDidEnter(){
  
    this.company.getUserData()
    
    .subscribe(res=> {
      if(res.user !== null){
        // this.userId = res.user._id;
        // console.log(res);
        
      }
    });
    
   }

   GetUserData(email) {
     this.company.getUserDataByEmail(email).subscribe(res => {
      this.userId = res.user._id;
      console.log(res);
     })
   }

  register(){
    this.company.createCompany(this.name, this.address, this.city, this.state, this.zipcode, this.country, this.sector, this.website, this.userId)
    .subscribe(res=> {
    if(res.message){
      let toast = this.toastCtrl.create({
        message:res.message,
        duration: 3000,
        position: 'bottom'

      });

      toast.present();
    }

    if (res.error){
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: res.error,
        buttons: ['OK']
      });
      alert.present();
    }
     });
   
this.name =  '';
this.address = '';
this.city = '';
this.state ='';
this.zipcode = '';
this.sector = '';
this.website = '';
this.country = '';
    }
    
      
    }



