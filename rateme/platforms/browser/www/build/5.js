webpackJsonp([5],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPageModule", function() { return ReviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__review__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReviewPageModule = /** @class */ (function () {
    function ReviewPageModule() {
    }
    ReviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__review__["a" /* ReviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__review__["a" /* ReviewPage */]),
            ],
        })
    ], ReviewPageModule);
    return ReviewPageModule;
}());

//# sourceMappingURL=review.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_company_company__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReviewPage = /** @class */ (function () {
    function ReviewPage(navCtrl, navParams, company, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.company = company;
        this.toastCtrl = toastCtrl;
        this.companyProfile = this.navParams.get("data");
        this.name = this.companyProfile.companyname;
    }
    ReviewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.company.getEmail().then(function (result) {
            _this.getData(result);
        });
    };
    ReviewPage.prototype.addReview = function () {
        var _this = this;
        this.company.addCompanyReview(this.companyProfile._id, this.culture, this.benefits, this.balance, this.speed, this.overall, this.review, this.userid)
            .subscribe(function (res) {
            //console.log(res.user);
            if (res.message) {
                var toast = _this.toastCtrl.create({
                    message: res.message,
                    duration: 3000,
                    position: "bottom"
                });
                toast.present();
                // console.log(res)
            }
            if (res.error) {
                //console.log(res)
                var toast = _this.toastCtrl.create({
                    message: res.error,
                    duration: 3000,
                    position: "bottom"
                });
                toast.present();
            }
        });
        this.review = '';
    };
    ReviewPage.prototype.getData = function (email) {
        var _this = this;
        this.company.getUserData(email)
            .subscribe(function (res) {
            if (res.user !== null) {
                _this.userid = res.user._id;
            }
        });
    };
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-review',template:/*ion-inline-start:"C:\Websites\rating\rateme\src\pages\review\review.html"*/'<ion-header>\n\n  <ion-navbar>\n  <ion-title>{{ name }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-item>\n    <ion-label color="primary" stacked>Culture and Values</ion-label>\n    <ion-range min="1" max="5" [(ngModel)]="culture" pin="true"></ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary" stacked>Compensation and Benefits</ion-label>\n    <ion-range min="1" max="5" [(ngModel)]="benefits" pin="true"></ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary" stacked>Worklife Balance</ion-label>\n    <ion-range min="1" max="5" [(ngModel)]="balance" pin="true"></ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary" stacked>Speed of Service</ion-label>\n    <ion-range min="1" max="5" [(ngModel)]="speed" pin="true"></ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color="primary" stacked>Overall</ion-label>\n    <ion-range min="1" max="5" [(ngModel)]="overall" pin="true"></ion-range>\n  </ion-item>\n\n  <ion-grid>\n    <ion-row>\n      <ion-label color="primary" stacked>Review</ion-label>\n      <ion-col col-12>\n        <ion-textarea [(ngModel)]="review"></ion-textarea>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-item>\n    <button ion-button block (click)="addReview()">Add Review</button>\n  </ion-item>\n</ion-content>\n\n'/*ion-inline-end:"C:\Websites\rating\rateme\src\pages\review\review.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_company_company__["a" /* CompanyProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ })

});
//# sourceMappingURL=5.js.map