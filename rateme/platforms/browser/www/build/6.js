webpackJsonp([6],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_register_register__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, reg, loadingCtrl, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reg = reg;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
    };
    RegisterPage.prototype.loginPage = function () {
        this.navCtrl.setRoot("LoginPage");
    };
    RegisterPage.prototype.userSignup = function () {
        var _this = this;
        if (this.fullname !== undefined || this.email !== undefined || this.password !== undefined) {
            this.showLoading();
            this.reg.registerUser(this.fullname, this.email, this.password)
                .subscribe(function (res) {
                _this.loading.dismiss();
                if (res.user) {
                    _this.storage.set('useremail', res.user.email);
                    _this.navCtrl.setRoot("HomePage");
                }
                if (res.error) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Sign Up Error',
                        subTitle: res.error,
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
            });
            this.fullname = '';
            this.password = '';
            this.email = '';
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Sign Up Error',
                subTitle: 'You cannot submit empty fields',
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    RegisterPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating.....',
            duration: 3000
        });
        this.loading.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Websites\rating\rateme\src\pages\register\register.html"*/'<ion-content>\n  <div padding ion-fixed style="height:100%; width:100%">\n      <div class="logo">\n          <img src="http://placehold.it/50x50">\n        </div>\n        <ion-item>\n          <ion-input type="text"[(ngModel)]="fullname" name ="fullname" placeholder="Fullname"></ion-input>\n          </ion-item>\n      <ion-item>\n        <ion-input type="email"[(ngModel)]="email" name ="email" placeholder="Email"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n        <ion-input type="password" [(ngModel)]="password" name = "password" placeholder="Password"></ion-input>\n      </ion-item>\n      <button ion-button block class="loginBtn" (click) = "userSignup()">Sign Up</button>\n      <br> \n      <button ion-button block clear class="signup" (click)="loginPage()">Already have an account? Login</button>\n  </div> \n</ion-content>\n '/*ion-inline-end:"C:\Websites\rating\rateme\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_register_register__["a" /* RegisterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=6.js.map