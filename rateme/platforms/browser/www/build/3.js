webpackJsonp([3],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_company_company__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, company, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.company = company;
        this.camera = camera;
    }
    SettingsPage.prototype.ionViewDidEnter = function () { };
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.company.getEmail().then(function (result) {
            _this.getData(result);
        });
    };
    SettingsPage.prototype.getData = function (email) {
        var _this = this;
        this.company.getUserData(email).subscribe(function (res) {
            _this.user = res.user;
        });
    };
    SettingsPage.prototype.addImage = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: false,
            correctOrientation: true,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 300,
            targetHeight: 300,
        };
        this.camera.getPicture(options).then(function (imgUrl) {
            _this.imagePath = 'data:image/jpeg;base64,' + imgUrl;
            _this.company.uploadImage(_this.user, _this.imagePath)
                .subscribe(function (res) {
                console.log(res);
            });
        });
    };
    SettingsPage.prototype.addLogo = function (name) {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: false,
            correctOrientation: true,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 300,
            targetHeight: 300,
        };
        this.camera.getPicture(options).then(function (imgUrl) {
            _this.imagePath = 'data:image/jpeg;base64,' + imgUrl;
            _this.company.uploadLogo(name._id, _this.imagePath)
                .subscribe(function (res) {
                console.log(res);
            });
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Websites\rating\rateme\src\pages\settings\settings.html"*/'\n<ion-header>\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n<ion-list>\n  <ion-list-header>\n    <ion-avatar item-start>\n      <img *ngIf="user" src="http://res.cloudinary.com/skyhawk/image/upload/v{{user.imageVersion}}/{{user.imageId}}">\n      <!--v in the string above is the version and needs to be in the URL String-->\n      </ion-avatar>\n      <p class = "account">Account</p>\n      \n      <p class = "name" *ngIf="user">{{this.user.fullname}} </p>\n      \n      <button ion-button item-end (click)="addImage()">Add Image</button>\n  </ion-list-header>\n</ion-list>\n\n<ion-list *ngIf="user">\n  <ion-list-header class="account">Companies</ion-list-header>\n  <ion-item *ngFor= "let usercompany of user.companies">\n    <ion-avatar item-start>\n      <img src="http://res.cloudinary.com/skyhawk/image/upload/v{{usercompany.company.imageVersion}}/{{usercompany.company.imageId}}">\n    </ion-avatar>\n\n    <ion-label class="name">\n      {{usercompany.company.companyname}}\n    </ion-label>\n\n    <button ion-button item-end (click)="addLogo(usercompany.company)">Add Logo</button>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Websites\rating\rateme\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_company_company__["a" /* CompanyProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=3.js.map