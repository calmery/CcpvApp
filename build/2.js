webpackJsonp([2],{

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_message_message_module__ = __webpack_require__(691);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MessagesPageModule = /** @class */ (function () {
    function MessagesPageModule() {
    }
    MessagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* MessagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__messages__["a" /* MessagesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_message_message_module__["a" /* MessageModule */]
            ],
        })
    ], MessagesPageModule);
    return MessagesPageModule;
}());

//# sourceMappingURL=messages.module.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__message__["a" /* MessageComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__message__["a" /* MessageComponent */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__message__["a" /* MessageComponent */]]
        })
    ], MessageModule);
    return MessageModule;
}());

//# sourceMappingURL=message.module.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
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

var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.displayDate = function (created_at) {
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
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], MessageComponent.prototype, "deleteMessage", void 0);
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'message',template:/*ion-inline-start:"/home/circleci/ccpv/src/components/message/message.html"*/'<ion-card>\n  <ion-card-header>\n    {{message.title}}\n  </ion-card-header>\n  <ion-card-content>\n    {{message.message}}\n  </ion-card-content>\n\n  <ion-row *ngIf="deleteMessage">\n    <ion-col>\n      <button ion-button icon-start clear small>\n        <ion-icon name="time"></ion-icon>\n        {{displayDate(message.created_at)}}\n      </button>\n    </ion-col>\n    <ion-col>\n      <button ion-button clear small float-right (click)="deleteMessage(message.id)">\n        削除する\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-card>\n'/*ion-inline-end:"/home/circleci/ccpv/src/components/message/message.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication__ = __webpack_require__(45);
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




var MessagesPage = /** @class */ (function () {
    function MessagesPage(navCtrl, navParams, alertCtrl, loadingCtrl, messageProvider, authenticationProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.messageProvider = messageProvider;
        this.authenticationProvider = authenticationProvider;
        this.messages = [];
        this.next = null;
        this.deleteMessage = this._deleteMessage.bind(this);
        if (!this.authenticationProvider.isAuthenticated || !this.authenticationProvider.isAdmin) {
            this.navCtrl.setRoot('top');
        }
    }
    MessagesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.getMessages();
        this.authenticationProvider
            .getObserver()
            .subscribe(function (isAuthenticated) {
            if (!isAuthenticated) {
                _this.navCtrl.setRoot('top');
            }
        });
    };
    MessagesPage.prototype.getMessages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.messageProvider.get()];
                    case 1:
                        response = _a.sent();
                        this.messages = response.messages;
                        this.next = response.next;
                        return [3 /*break*/, 4];
                    case 2:
                        _1 = _a.sent();
                        return [4 /*yield*/, this.alertCtrl.create({
                                title: 'メッセージの取得に失敗しました',
                                buttons: ['OK']
                            }).present()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /** 新規メッセージを入力するプロンプトを表示する */
    MessagesPage.prototype.addMessagePrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'メッセージ',
            inputs: [{
                    name: 'title',
                    placeholder: 'タイトル'
                }, {
                    name: 'message',
                    placeholder: 'メッセージ'
                }],
            buttons: [{
                    text: 'キャンセル',
                    role: 'cancel'
                }, {
                    text: '検索',
                    handler: function (_a) {
                        var title = _a.title, message = _a.message;
                        if (title === '' || message === '') {
                            _this.alertCtrl.create({
                                title: 'タイトル，メッセージは必ず入力する必要があります',
                                buttons: ['OK']
                            }).present();
                            return;
                        }
                        _this.addMessage(title, message);
                    }
                }]
        });
        prompt.present();
    };
    MessagesPage.prototype.doRefresh = function (refresher) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getMessages()];
                    case 1:
                        _a.sent();
                        refresher.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessagesPage.prototype.doInfinite = function (infiniteScroll) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.next === null) {
                            infiniteScroll.complete();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.messageProvider.get(this.next)];
                    case 1:
                        response = _a.sent();
                        this.messages = this.messages.concat(response.messages);
                        this.next = response.next || null;
                        infiniteScroll.complete();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 指定されたメッセージを削除するか確認する */
    MessagesPage.prototype._deleteMessage = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: 'このメッセージを削除しますか？',
                            buttons: [{
                                    text: 'キャンセル',
                                    role: 'cancel'
                                }, {
                                    text: '削除する',
                                    handler: function () {
                                        _this.delete(id);
                                    }
                                }]
                        }).present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 指定されたメッセージ ID のメッセージを削除する */
    MessagesPage.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, _2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create();
                        loading.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 6]);
                        return [4 /*yield*/, this.messageProvider.delete(id)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.alertCtrl.create({
                                title: '削除しました',
                                buttons: ['OK']
                            }).present()];
                    case 3:
                        _a.sent();
                        this.getMessages();
                        return [3 /*break*/, 6];
                    case 4:
                        _2 = _a.sent();
                        return [4 /*yield*/, this.alertCtrl.create({
                                title: 'メッセージの削除に失敗しました',
                                buttons: [{
                                        text: 'キャンセル',
                                        role: 'cancel'
                                    }, {
                                        text: '再試行',
                                        handler: function () {
                                            _this.delete(id);
                                        }
                                    }]
                            }).present()];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 6:
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessagesPage.prototype.addMessage = function (title, message) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create();
                        loading.present();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, this.messageProvider.post(title, message)];
                    case 2:
                        _a.sent();
                        this.getMessages();
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        return [4 /*yield*/, this.alertCtrl.create({
                                title: 'メッセージの作成に失敗しました',
                                buttons: [{
                                        text: 'キャンセル',
                                        role: 'cancel'
                                    }, {
                                        text: '再試行',
                                        handler: function () {
                                            _this.addMessage(title, message);
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
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messages',template:/*ion-inline-start:"/home/circleci/ccpv/src/pages/messages/messages.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>メッセージ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid fixed no-padding>\n    <div class="no-list" *ngIf="messages.length === 0">\n      メッセージはありません\n    </div>\n    <message [deleteMessage]="deleteMessage" [message]="message" *ngFor="let message of messages"></message>\n  </ion-grid>\n  <ion-fab bottom right>\n    <button ion-fab color="light" (click)="addMessagePrompt()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n  <ion-infinite-scroll [style.display]="next === null ? \'none\' : \'block\'" (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/home/circleci/ccpv/src/pages/messages/messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_message__["a" /* MessageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authentication__["a" /* AuthenticationProvider */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ })

});
//# sourceMappingURL=2.js.map