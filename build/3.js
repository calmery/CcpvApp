webpackJsonp([3],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsPageModule", function() { return StatisticsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statistics__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatisticsPageModule = /** @class */ (function () {
    function StatisticsPageModule() {
    }
    StatisticsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__statistics__["a" /* StatisticsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__statistics__["a" /* StatisticsPage */]),
            ],
        })
    ], StatisticsPageModule);
    return StatisticsPageModule;
}());

//# sourceMappingURL=statistics.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatisticsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_statistics__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var StatisticsPage = /** @class */ (function () {
    function StatisticsPage(navCtrl, navParams, alertCtrl, authenticationProvider, loadingCtrl, statisticsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.authenticationProvider = authenticationProvider;
        this.loadingCtrl = loadingCtrl;
        this.statisticsProvider = statisticsProvider;
        this.safeCount = 0;
        this.unsafeCount = 0;
    }
    StatisticsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getSafeAndUnSafeCount();
        this.authenticationProvider
            .getObserver()
            .subscribe(function (isAuthenticated) {
            if (!isAuthenticated) {
                _this.navCtrl.setRoot('top');
            }
        });
    };
    StatisticsPage.prototype.getSafeAndUnSafeCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, response, _1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create();
                        loading.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, this.statisticsProvider.getSafeAndUnSafeCount()];
                    case 2:
                        response = _a.sent();
                        this.safeCount = response.safe;
                        this.unsafeCount = response.unsafe;
                        return [3 /*break*/, 5];
                    case 3:
                        _1 = _a.sent();
                        return [4 /*yield*/, this.alertCtrl.create({
                                title: 'データの取得に失敗しました',
                                buttons: [{
                                        text: 'キャンセル',
                                        role: 'cancel',
                                        handler: function () {
                                            // どこかのページから移動してきた場合はそのページに戻る
                                            if (_this.navCtrl.length() > 1) {
                                                _this.navCtrl.pop();
                                                return;
                                            }
                                            // 直接このページを開いている場合はトップページに戻る
                                            _this.navCtrl.setRoot('top');
                                        }
                                    }, {
                                        text: '再試行',
                                        handler: function () {
                                            _this.getSafeAndUnSafeCount();
                                        }
                                    }]
                            }).present()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 5:
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatisticsPage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSafeAndUnSafeCount()];
                    case 1:
                        _a.sent();
                        refresher.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatisticsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statistics',template:/*ion-inline-start:"/home/circleci/ccpv/src/pages/statistics/statistics.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>統計</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid fixed no-padding>\n    <table class="table">\n      <tr>\n        <td>Safe</td>\n        <td>{{safeCount}}</td>\n      </tr>\n      <tr>\n        <td>UnSafe</td>\n        <td>{{unsafeCount}}</td>\n      </tr>\n    </table>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/circleci/ccpv/src/pages/statistics/statistics.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_statistics__["a" /* StatisticsProvider */]])
    ], StatisticsPage);
    return StatisticsPage;
}());

//# sourceMappingURL=statistics.js.map

/***/ })

});
//# sourceMappingURL=3.js.map