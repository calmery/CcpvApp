webpackJsonp([4],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list__ = __webpack_require__(696);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list__["a" /* ListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__list__["a" /* ListPage */]),
            ],
        })
    ], ListPageModule);
    return ListPageModule;
}());

//# sourceMappingURL=list.module.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_list__ = __webpack_require__(341);
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




var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, alertCtrl, authenticationProvider, listProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.authenticationProvider = authenticationProvider;
        this.listProvider = listProvider;
        this.loadingCtrl = loadingCtrl;
        this.lists = [];
        if (!authenticationProvider.isAuthenticated) {
            this.navCtrl.setRoot('top');
        }
    }
    ListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.authenticationProvider
            .getObserver()
            .subscribe(function (isAuthenticated) {
            if (!isAuthenticated) {
                _this.navCtrl.setRoot('top');
            }
        });
        this.getMyLists();
    };
    ListPage.prototype.getMyLists = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, 4, 5]);
                        this.loading = this.loadingCtrl.create();
                        this.loading.present();
                        _a = this;
                        return [4 /*yield*/, this.listProvider.getMyLists()];
                    case 1:
                        _a.lists = _b.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        error_1 = _b.sent();
                        return [4 /*yield*/, this.alertCtrl.create({
                                title: 'リストの取得に失敗しました',
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
                                            _this.getMyLists();
                                        }
                                    }]
                            }).present()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading.dismiss();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ListPage.prototype.displayDate = function (list) {
        var time = new Date(list.updated_at);
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var date = time.getDate();
        return year + "/" + ((month < 10 ? '0' : '') + month) + "/" + ((date < 10 ? '0' : '') + date);
    };
    ListPage.prototype.open = function (list) {
        this.navCtrl.push('edit', list);
    };
    ListPage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getMyLists()];
                    case 1:
                        _a.sent();
                        refresher.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 検索ワードを入力するプロンプトを表示する */
    ListPage.prototype.openSearch = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: '検索',
            inputs: [{
                    name: 'name',
                    placeholder: '名前'
                }, {
                    name: 'query',
                    placeholder: 'キーワード'
                }],
            buttons: [{
                    text: 'キャンセル',
                    role: 'cancel'
                }, {
                    text: '検索',
                    handler: function (_a) {
                        var name = _a.name, query = _a.query;
                        _this.createList(name, query);
                    }
                }]
        });
        prompt.present();
    };
    /** 新規リストを作成する */
    ListPage.prototype.createList = function (name, query) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var isSucceeded, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = this.loadingCtrl.create();
                        this.loading.present();
                        if (!(name === '' || query === '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.alertCtrl.create({
                                title: '検索できませんでした',
                                message: '名前，またキーワードは少なくとも 1 文字以上である必要があります',
                                buttons: ['閉じる']
                            }).present()];
                    case 1:
                        _a.sent();
                        this.loading.dismiss();
                        return [2 /*return*/];
                    case 2:
                        isSucceeded = false;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 7]);
                        return [4 /*yield*/, this.listProvider.new(name, query)];
                    case 4:
                        _a.sent();
                        isSucceeded = true;
                        return [3 /*break*/, 7];
                    case 5:
                        error_2 = _a.sent();
                        return [4 /*yield*/, this.alertCtrl.create({
                                title: '検索に失敗しました',
                                buttons: [{
                                        text: 'キャンセル',
                                        role: 'cancel'
                                    }, {
                                        text: '再試行',
                                        handler: function () {
                                            _this.createList(name, query);
                                        }
                                    }]
                            }).present()];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 7:
                        this.loading.dismiss();
                        if (isSucceeded) {
                            // リストを再取得する
                            this.getMyLists();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/circleci/ccpv/src/pages/list/list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>リスト</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid fixed no-padding>\n    <ion-list *ngIf="lists.length > 0">\n      <button ion-item *ngFor="let list of lists" (click)="open(list)">\n        <ion-icon name="logo-twitter" item-left></ion-icon>\n        <ion-label>\n          {{list.name}}\n        </ion-label>\n        <div item-content>\n          {{displayDate(list)}}\n        </div>\n      </button>\n    </ion-list>\n    <div class="no-list" *ngIf="lists.length === 0">\n      リストは作成されていません\n    </div>\n  </ion-grid>\n\n  <ion-fab bottom right>\n    <button ion-fab color="light" (click)="openSearch()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/circleci/ccpv/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_list__["a" /* ListProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ })

});
//# sourceMappingURL=4.js.map