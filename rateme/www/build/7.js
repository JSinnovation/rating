webpackJsonp([7],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesPageModule", function() { return CompaniesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__companies__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompaniesPageModule = /** @class */ (function () {
    function CompaniesPageModule() {
    }
    CompaniesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__companies__["a" /* CompaniesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__companies__["a" /* CompaniesPage */]),
            ],
        })
    ], CompaniesPageModule);
    return CompaniesPageModule;
}());

//# sourceMappingURL=companies.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_company_company__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompaniesPage = /** @class */ (function () {
    function CompaniesPage(navCtrl, navParams, company) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.company = company;
        this.companies = [];
    }
    CompaniesPage.prototype.ionViewDidLoad = function () {
        this.getAllCompanies();
    };
    // new method
    CompaniesPage.prototype.getAllCompanies = function () {
        var _this = this;
        this.company.getCompanies()
            .subscribe(function (res) {
            //res is an array and we are setting it to another array
            _this.companies = res.result;
        });
    };
    CompaniesPage.prototype.companyProfile = function (company) {
        console.log(company);
        this.navCtrl.push("CompanyprofilePage", { "data": company });
        // this.navCtrl.push('CreatecorporationPage')
    };
    CompaniesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-companies',template:/*ion-inline-start:"C:\Websites\rating\rateme\src\pages\companies\companies.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>All Companies</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n<!-->angular like a for each loop -->\n<ion-item *ngFor="let company of companies" (click)="companyProfile(company)">\n<ion-row>\n  <ion-col col-2>\n<ion-avatar ion-start>\n<img src="http://placehold.it/10x10">\n</ion-avatar>\n</ion-col>\n<!--grid width in ionic is 12 just like Bootstrap-->\n\n<ion-col col-10 class="rowCol">\n<h2 class = "companyname" text-wrap>\n  {{company.companyname}}\n</h2>\n\n<ion-col class="dataCol">\n  <ion-row>\n    <ion-col col-12 text-wrap> \n<span>\n  <ion-icon name="archive" class="iconClass"> </ion-icon>\n  {{company.sector}}\n</span>\n    </ion-col>\n    <ion-col col-12>\n      <ion-icon name = "pin" class = "iconClass"></ion-icon>\n      {{company.city}}, {{company.country}}\n    </ion-col>\n    <ion-col col-12 class = "rating">\n      <ion-icon name="star"></ion-icon>\n      <ion-icon name="star"></ion-icon>\n      <ion-icon name="star"></ion-icon>\n      <ion-icon name="star"></ion-icon>\n      <ion-icon name="star"></ion-icon>\n\n      (4.5)\n      \n    </ion-col>\n  </ion-row>\n</ion-col>\n\n  </ion-col>\n\n</ion-row>\n</ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Websites\rating\rateme\src\pages\companies\companies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_company_company__["a" /* CompanyProvider */]])
    ], CompaniesPage);
    return CompaniesPage;
}());

//# sourceMappingURL=companies.js.map

/***/ })

});
//# sourceMappingURL=7.js.map