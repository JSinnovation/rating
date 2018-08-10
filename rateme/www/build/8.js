webpackJsonp([8],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderPageModule", function() { return LeaderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__leader__ = __webpack_require__(427);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LeaderPageModule = /** @class */ (function () {
    function LeaderPageModule() {
    }
    LeaderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__leader__["a" /* LeaderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__leader__["a" /* LeaderPage */]),
            ],
        })
    ], LeaderPageModule);
    return LeaderPageModule;
}());

//# sourceMappingURL=leader.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_company_company__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeaderPage = /** @class */ (function () {
    function LeaderPage(navCtrl, navParams, company) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.company = company;
        this.companies = [];
    }
    LeaderPage.prototype.companyProfile = function (company) {
        //console.log(company)
        this.navCtrl.push("CompanyprofilePage", { "data": company });
        // this.navCtrl.push('CreatecorporationPage')
    };
    LeaderPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.company.leaderBoard()
            .subscribe(function (res) {
            _this.companies = res.result;
        });
    };
    LeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-leader',template:/*ion-inline-start:"C:\Websites\rating\rateme\src\pages\leader\leader.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>Top Rated</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content>\n   \n    <ion-item *ngFor="let company of companies ; let i = index;" (click)="companyProfile(company)" > \n      <!--note above we use a semicolon and close the quotes and then add the click event-->\n      <ion-row>\n        <ion-col col-2>\n          <ion-avatar item-start>\n            <img *ngIf="company.imageVersion !== \'\'" src="http://res.cloudinary.com/rateapp/image/upload/v{{company.imageVersion}}/{{company.imageId}}">\n            <img *ngIf="company.imageVersion === \'\'" src="http://placehold.it/10x10">\n          </ion-avatar>\n        </ion-col>\n  \n        <ion-col col-10 class="rowCol">\n          <h2 class="companyname" text-wrap>\n            {{company.companyname}}\n          </h2>\n  \n          <ion-col class="dataCol">\n            <ion-row>\n              <ion-col col-12 text-wrap>\n                <span>\n                  <ion-icon name="star" class="iconClass"></ion-icon>\n                  {{company.totalStars}} Total Stars\n                </span>\n              </ion-col>\n              <ion-col col-12 text-wrap>\n                <ion-icon name="add-circle" class="iconClass"></ion-icon>\n                #{{i + 1}}\n              </ion-col>\n  \n              <ion-col col-12 class="rating">\n                \n              </ion-col>\n            </ion-row>\n          </ion-col>\n  \n        </ion-col>\n  \n      </ion-row>\n    </ion-item>\n  </ion-content>\n  '/*ion-inline-end:"C:\Websites\rating\rateme\src\pages\leader\leader.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_company_company__["a" /* CompanyProvider */]])
    ], LeaderPage);
    return LeaderPage;
}());

//# sourceMappingURL=leader.js.map

/***/ })

});
//# sourceMappingURL=8.js.map