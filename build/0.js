webpackJsonp([0],{

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tweet_tweet_module__ = __webpack_require__(688);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditPageModule = /** @class */ (function () {
    function EditPageModule() {
    }
    EditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit__["a" /* EditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit__["a" /* EditPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_tweet_tweet_module__["a" /* TweetModule */]
            ],
        })
    ], EditPageModule);
    return EditPageModule;
}());

//# sourceMappingURL=edit.module.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_list__ = __webpack_require__(341);
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



var EditPage = /** @class */ (function () {
    function EditPage(navCtrl, navParams, alertCtrl, loadingCtrl, listProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.listProvider = listProvider;
        this.listsTweets = [];
        this.temporaryState = {};
        /** this.temporaryState を参照する必要があるため this をバインドした状態のメソッドを子要素に渡す */
        this.changeSafeState = this._changeSafeState.bind(this);
        // フラグなどの状態を変更した後に保存したかどうかを保持する
        this.isSaved = true;
        this.id = this.navParams.get('id');
        this.name = this.navParams.get('name');
        // 直接ページを開いた場合，前のページに戻るかリストページに遷移する
        if (this.id === undefined || this.name === undefined) {
            if (this.navCtrl.length() > 1) {
                this.navCtrl.pop();
                return;
            }
            this.navCtrl.setRoot('list');
            return;
        }
    }
    EditPage.prototype.ionViewDidLoad = function () {
        this.getList();
    };
    /** 子要素にコールバック関数として渡す */
    EditPage.prototype._changeSafeState = function (id, isSafe) {
        /*
         * 子要素にメソッドを渡さずに Edit ページ側でクリックイベントを取得してフラグを更新する
         * 子要素には変更したフラグを渡すようにしていたがうまくフラグが渡せなかったためメソッド自体を渡すようにした
         * changeDetectorRef.detectChanges を呼び出してもうまく反映されなかった
         */
        this.temporaryState[id.toString()] = isSafe;
        // 変更が加えられたため保存していない状態にする
        this.isSaved = false;
    };
    /** リストを取得する */
    EditPage.prototype.getList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var list, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, 4, 5]);
                        this.loading = this.loadingCtrl.create();
                        this.loading.present();
                        return [4 /*yield*/, this.listProvider.get(this.id)];
                    case 1:
                        list = _a.sent();
                        this.listsTweets = list.lists_tweets;
                        this.listsTweets.forEach(function (_a) {
                            var is_safe = _a.is_safe, tweet = _a.tweet;
                            _this.temporaryState[tweet.id.toString()] = is_safe;
                        });
                        return [3 /*break*/, 5];
                    case 2:
                        error_1 = _a.sent();
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
                                            // 直接このページを開いている場合はリストページに戻る
                                            _this.navCtrl.setRoot('list');
                                        }
                                    }, {
                                        text: '再試行',
                                        handler: function () {
                                            _this.getList();
                                        }
                                    }]
                            }).present()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading.dismiss();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    EditPage.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var array, key, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 5]);
                        this.loading = this.loadingCtrl.create();
                        this.loading.present();
                        array = [];
                        for (key in this.temporaryState) {
                            array.push({
                                id: key,
                                is_safe: this.temporaryState[key]
                            });
                        }
                        return [4 /*yield*/, this.listProvider.post(this.id, array)];
                    case 1:
                        _a.sent();
                        this.isSaved = true;
                        return [4 /*yield*/, this.alertCtrl.create({
                                title: '保存しました',
                                buttons: ['閉じる']
                            }).present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        error_2 = _a.sent();
                        this.alertCtrl.create({
                            title: '保存に失敗しました',
                            buttons: [{
                                    text: 'キャンセル',
                                    role: 'cancel'
                                }, {
                                    text: '再試行',
                                    handler: function () {
                                        _this.save();
                                    }
                                }]
                        }).present();
                        return [3 /*break*/, 5];
                    case 4:
                        this.loading.dismiss();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /** 保存が完了していない場合は前のページに戻るかを確認する */
    EditPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this.isSaved) {
                _this.alertCtrl.create({
                    title: '保存せずに終了しますか？',
                    buttons: [{
                            text: 'キャンセル',
                            role: 'cancel',
                            handler: function () {
                                resolve(false);
                            }
                        }, {
                            text: '終了',
                            handler: function () {
                                resolve(true);
                            }
                        }]
                }).present();
            }
            else {
                resolve(true);
            }
        });
    };
    EditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit',template:/*ion-inline-start:"/home/circleci/ccpv/src/pages/edit/edit.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{name}}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="save()">保存</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-grid fixed no-padding>\n    <tweet [tweet]="listTweet.tweet" [isSafe]="temporaryState[listTweet.tweet.id]" *ngFor="let listTweet of listsTweets" [callback]="changeSafeState"></tweet>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/circleci/ccpv/src/pages/edit/edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_list__["a" /* ListProvider */]])
    ], EditPage);
    return EditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweetModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tweet__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TweetModule = /** @class */ (function () {
    function TweetModule() {
    }
    TweetModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__tweet__["a" /* TweetComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__tweet__["a" /* TweetComponent */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__tweet__["a" /* TweetComponent */]]
        })
    ], TweetModule);
    return TweetModule;
}());

//# sourceMappingURL=tweet.module.js.map

/***/ }),

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TweetComponent = /** @class */ (function () {
    function TweetComponent() {
    }
    TweetComponent.prototype.ngOnInit = function () {
        this.user = this.tweet.user;
        this.media = this.tweet.media;
        this.mentions = this.tweet.mentions;
    };
    TweetComponent.prototype.changeSafeStatus = function () {
        this.isSafe = !this.isSafe;
        this.callback(this.tweet.id, this.isSafe);
    };
    TweetComponent.prototype.displayDate = function (created_at) {
        var time = new Date(created_at);
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var date = time.getDate();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        return year + "/" + ((month < 10 ? '0' : '') + month) + "/" + ((date < 10 ? '0' : '') + date) + " " + hours + ":" + minutes;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TweetComponent.prototype, "tweet", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TweetComponent.prototype, "isSafe", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TweetComponent.prototype, "callback", void 0);
    TweetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tweet',template:/*ion-inline-start:"/home/circleci/ccpv/src/components/tweet/tweet.html"*/'<ion-card (click)="changeSafeStatus()">\n\n  <ion-item *ngIf="!isSafe">\n    <ion-avatar item-start>\n      <img src="{{user.profile_image_url}}">\n    </ion-avatar>\n    <h2>{{user.name}}</h2>\n    <p>@{{user.screen_name}}（{{user.id}}）</p>\n  </ion-item>\n\n  <!-- img src="img/advance-card-bttf.png" -->\n\n  <ion-card-content *ngIf="isSafe" class="ellipsis">\n    <ion-icon name="checkmark-circle"></ion-icon>\n    {{tweet.text}}\n  </ion-card-content>\n  <ion-card-content *ngIf="!isSafe">\n    {{tweet.text}}\n  </ion-card-content>\n\n  <ion-row *ngIf="!isSafe">\n    <ion-col>\n      <button ion-button icon-start clear small>\n        <ion-icon name="refresh"></ion-icon>\n        {{tweet.retweet_count}}\n      </button>\n      <button ion-button icon-start clear small>\n        <ion-icon name="heart"></ion-icon>\n        {{tweet.favorite_count}}\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button clear small float-right>\n        {{displayDate(tweet.created_at)}}\n      </button>\n    </ion-col>\n  </ion-row>\n\n</ion-card>\n'/*ion-inline-end:"/home/circleci/ccpv/src/components/tweet/tweet.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TweetComponent);
    return TweetComponent;
}());

//# sourceMappingURL=tweet.js.map

/***/ })

});
//# sourceMappingURL=0.js.map