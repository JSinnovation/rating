webpackJsonp([3],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecompanyPageModule", function() { return CreatecompanyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createcompany__ = __webpack_require__(284);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
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

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatecompanyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_company_company__ = __webpack_require__(199);
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
    function CreatecompanyPage(navCtrl, navParams, company) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.company = company;
    }
    CreatecompanyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.company.getUserData()
            .subscribe(function (res) {
            console.log(res.user);
            _this.userId = res.user._id;
        });
    };
    CreatecompanyPage.prototype.register = function () {
        this.company.createCompany(this.name, this.address, this.city, this.country, this.sector, this.website, this.userId)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    CreatecompanyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createcompany',template:/*ion-inline-start:"C:\Websites\rating\rateme\src\pages\createcompany\createcompany.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register Company</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<div> \n    <ion-item>\n      <ion-label color="primary" stacked>Company Name</ion-label>\n        <ion-input type="text" [(ngModel)]="name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Company Address</ion-label>\n        <ion-input type="text" [(ngModel)]="address"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>City</ion-label>\n        <ion-input type="text" [(ngModel)]="city"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Country</ion-label>\n        <ion-input type="text" [(ngModel)]="country"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Sector</ion-label>\n        <ion-input type="text" [(ngModel)]="sector"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color="primary" stacked>Website</ion-label>\n        <ion-input type="text" [(ngModel)]="website"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <button ion-button block (click)="register()">Register</button>\n      </ion-item>\n</div>\n</ion-content>\n'/*ion-inline-end:"C:\Websites\rating\rateme\src\pages\createcompany\createcompany.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_company_company__["a" /* CompanyProvider */]])
    ], CreatecompanyPage);
    return CreatecompanyPage;
}());

//# sourceMappingURL=createcompany.js.map

/***/ })

});
//# sourceMappingURL=3.js.map