webpackJsonp([4],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
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



var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, company) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.company = company;
        //defining and initializing at the same time is TypeScript
        this.searchResults = [];
        this.showList = true;
        this.showResults = [];
        this.results = false;
        this.noResults = false;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
    };
    SearchPage.prototype.searchCompany = function () {
        var _this = this;
        this.showList = true;
        this.company.searchCompany(this.companyname)
            .subscribe(function (res) {
            if (res.results.length > 0) {
                _this.results = true;
                _this.noResults = false;
                _this.showResults = res.results;
                _this.searchResults = res.results;
            }
            else {
                _this.noResults = true;
                _this.showResults = res.results;
                _this.searchResults = [{ "companyname": "No results found" }];
            }
        });
    };
    SearchPage.prototype.onCancel = function (event) {
        this.showList = false;
    };
    SearchPage.prototype.onClear = function (event) {
        this.showList = false;
    };
    SearchPage.prototype.companyProfile = function (company) {
        this.showList = false;
        this.companyname = '';
        this.navCtrl.push("CompanyprofilePage", { data: company });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\Websites\rating\rateme\src\pages\search\search.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-searchbar\n[(ngModel)]="companyname"\n[showCancelButton]="true"\n(keyup)="searchCompany()"\n(ionCancel)="onCancel($event)"\n(ionClear)="onClear($event)" \n></ion-searchbar>\n\n<ion-list *ngIf="showList">\n  <ion-item *ngFor="let company of searchResults">\n<h2>\n  <button ion-item *ngIf = "results && showResults.length > 0" (click)="companyProfile(company)"> \n{{company.companyname}}\n  </button>\n</h2>\n\n<button ion-item *ngIf = "noResults && showResults.length === 0">\n{{company.companyname}}\n</button>\n  </ion-item>\n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Websites\rating\rateme\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_company_company__["a" /* CompanyProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=4.js.map