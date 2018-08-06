webpackJsonp([8],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecompanyPageModule", function() { return CreatecompanyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createcompany__ = __webpack_require__(424);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreatecompanyPageModule = /** @class */ (function () {
    function CreatecompanyPageModule() {
    }
    CreatecompanyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__createcompany__["a" /* CreatecompanyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__createcompany__["a" /* CreatecompanyPage */]),
            ],
        })
    ], CreatecompanyPageModule);
    return CreatecompanyPageModule;
}());

//# sourceMappingURL=createcompany.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatecompanyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_company_company__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreatecompanyPage = /** @class */ (function () {
    function CreatecompanyPage(navCtrl, navParams, company, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.company = company;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    CreatecompanyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.company.getUserEmail().then(function (value) {
            _this.GetUserData(value);
        });
    };
    CreatecompanyPage.prototype.ionViewDidEnter = function () {
        this.company.getUserData()
            .subscribe(function (res) {
            if (res.user !== null) {
                // this.userId = res.user._id;
                // console.log(res);
            }
        });
    };
    CreatecompanyPage.prototype.GetUserData = function (email) {
        var _this = this;
        this.company.getUserDataByEmail(email).subscribe(function (res) {
            _this.userId = res.user._id;
            console.log(res);
        });
    };
    CreatecompanyPage.prototype.register = function () {
        var _this = this;
        this.company.createCompany(this.name, this.address, this.city, this.state, this.zipcode, this.country, this.sector, this.website, this.userId)
            .subscribe(function (res) {
            if (res.message) {
                var toast = _this.toastCtrl.create({
                    message: res.message,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
            if (res.error) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: res.error,
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
        this.name = '';
        this.address = '';
        this.city = '';
        this.state = '';
        this.zipcode = '';
        this.sector = '';
        this.website = '';
        this.country = '';
    };
    CreatecompanyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-createcompany',template:/*ion-inline-start:"C:\Websites\rating\rateme\src\pages\createcompany\createcompany.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register Company</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<div ion-fixed style="height:100%; width:100%">\n    <ion-item>\n      <ion-label color="primary" stacked>Company Name</ion-label>\n        <ion-input type="text" [(ngModel)]="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Company Address</ion-label>\n        <ion-input type="text" [(ngModel)]="address"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>City</ion-label>\n        <ion-input type="text" [(ngModel)]="city"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>State</ion-label>\n        <ion-input type="text" [(ngModel)]="state"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Zipcode</ion-label>\n        <ion-input type="text" [(ngModel)]="zipcode"></ion-input>\n        </ion-item>\n        <ion-item>\n        <ion-label color="primary" stacked>Country</ion-label>\n        <ion-input type="text" [(ngModel)]="country"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Sector</ion-label>\n        <ion-input type="text" [(ngModel)]="sector"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Website</ion-label>\n        <ion-input type="text" [(ngModel)]="website"></ion-input>\n      </ion-item>\n\n      <ion-item class="btnItem">\n        <button ion-button block (click)="register()">Register</button>\n      </ion-item>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Websites\rating\rateme\src\pages\createcompany\createcompany.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_company_company__["a" /* CompanyProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], CreatecompanyPage);
    return CreatecompanyPage;
}());

//# sourceMappingURL=createcompany.js.map

/***/ })

});
//# sourceMappingURL=8.js.map