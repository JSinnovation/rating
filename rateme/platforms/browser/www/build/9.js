webpackJsonp([9],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(426);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, company) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.company = company;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.company.getEmail().then(function (result) {
            _this.GetData(result);
        });
    };
    HomePage.prototype.GetData = function (email) {
        var _this = this;
        this.company.getUserData(email).subscribe(function (res) {
            _this.user = res.user;
        });
    };
    HomePage.prototype.reviewPage = function () {
        this.navCtrl.push("ReviewPage");
    };
    HomePage.prototype.goToSearch = function () {
        this.navCtrl.push("SearchPage");
    };
    HomePage.prototype.addCompany = function () {
        this.navCtrl.push("CreatecompanyPage");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Websites\rating\rateme\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar class = "navbar">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n<h3 class="header1"> Hello, Mark Twain</h3>\n<p class = "text-content1">\n  What would you like to do today?\n\n\n</p>\n<ion-card class="card1">\n<ion-icon name="log-in"></ion-icon>\n<ion-card-header class="header">\n  Add Company\n</ion-card-header>\n<ion-card-content>\n<p class="text-content">\nAdd Company Profile.  Registered employees can give reviews.\n</p>\n<button class="btn1" ion-button block>Add</button>\n</ion-card-content>\n</ion-card>\n\n<ion-card class="card2">\n    <ion-icon name="search"></ion-icon>\n    <ion-card-header class="header">\n      Search\n    </ion-card-header>\n    <ion-card-content>\n    <p class="text-content">\n    Search through our business catalog and find your best partner.\n    </p>\n    <button class="btn2" ion-button block (click)="goToSearch()">Search</button>\n    </ion-card-content>\n    </ion-card>\n\n    \n    <ion-card class="card3">\n        <ion-icon name="star" ></ion-icon>\n        <ion-card-header class="header">\n          Rate\n        </ion-card-header>\n        <ion-card-content>\n        <p class="text-content">\n        Rate and review other companies and get your company reviewed.\n        </p>\n\n        <button class="btn3" ion-button block (click)="reviewPage()">Rate</button>\n        </ion-card-content>\n        </ion-card>\n        \n\n</ion-content>\n'/*ion-inline-end:"C:\Websites\rating\rateme\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_company_company__["a" /* CompanyProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=9.js.map