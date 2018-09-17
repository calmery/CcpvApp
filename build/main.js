webpackJsonp([3],{

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit/edit.module": [
		684,
		0
	],
	"../pages/list/list.module": [
		685,
		2
	],
	"../pages/top/top.module": [
		686,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return endpoints; });
var url = (function () {
    // Production
    if (true) {
        return 'https://ccpv.herokuapp.com';
    }
    // Development
    return 'http://localhost:8000';
})();
var endpoints = {
    authentication: '/authentication',
    list: '/list'
};
//# sourceMappingURL=url.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_url__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication__ = __webpack_require__(86);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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




var ListProvider = /** @class */ (function () {
    function ListProvider(http, authenticationProvider) {
        this.http = http;
        this.authenticationProvider = authenticationProvider;
    }
    /** 所有する全てのリストを取得する */
    ListProvider.prototype.getMyLists = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lists, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get("" + __WEBPACK_IMPORTED_MODULE_2__constants_url__["b" /* url */] + __WEBPACK_IMPORTED_MODULE_2__constants_url__["a" /* endpoints */].list, __assign({}, this.authenticationProvider.requestHeaders())).toPromise()];
                    case 1:
                        lists = _a.sent();
                        return [2 /*return*/, lists];
                    case 2:
                        error_1 = _a.sent();
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /** 検索ワードと紐付けた新規リストを作成する */
    ListProvider.prototype.new = function (name, query) {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.post("" + __WEBPACK_IMPORTED_MODULE_2__constants_url__["b" /* url */] + __WEBPACK_IMPORTED_MODULE_2__constants_url__["a" /* endpoints */].list, { name: name, query: query }, __assign({}, this.authenticationProvider.requestHeaders())).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 2:
                        error_2 = _a.sent();
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /** 受け取った ID に対応したリストが自身の所有するリストだった場合にその内容を取得する */
    ListProvider.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var list, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.http.get("" + __WEBPACK_IMPORTED_MODULE_2__constants_url__["b" /* url */] + __WEBPACK_IMPORTED_MODULE_2__constants_url__["a" /* endpoints */].list + "/" + id, __assign({}, this.authenticationProvider.requestHeaders())).toPromise()];
                    case 1:
                        list = _a.sent();
                        return [2 /*return*/, list];
                    case 2:
                        error_3 = _a.sent();
                        throw error_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /** 投稿に紐づいているフラグを更新する */
    ListProvider.prototype.post = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        console.log(__assign({}, this.authenticationProvider.requestHeaders(), { params: {
                                tweets: data
                            } }));
                        return [4 /*yield*/, this.http.post("" + __WEBPACK_IMPORTED_MODULE_2__constants_url__["b" /* url */] + __WEBPACK_IMPORTED_MODULE_2__constants_url__["a" /* endpoints */].list + "/" + id, { tweets: data }, __assign({}, this.authenticationProvider.requestHeaders())).toPromise()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        throw error_4;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ListProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__authentication__["a" /* AuthenticationProvider */]])
    ], ListProvider);
    return ListProvider;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(347);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_menu_menu_module__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_list__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Menu

// Providers



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    mode: 'md'
                }, {
                    links: [
                        { loadChildren: '../pages/edit/edit.module#EditPageModule', name: 'edit', segment: 'edit/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'list', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/top/top.module#TopPageModule', name: 'top', segment: 'top', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__components_menu_menu_module__["a" /* MenuModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__providers_authentication__["a" /* AuthenticationProvider */],
                __WEBPACK_IMPORTED_MODULE_6__providers_list__["a" /* ListProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return local; });
var local = {
    apiKey: '_apiKey',
    userName: '_userName',
    userId: '_userId'
};
//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiKey", function() { return apiKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authDomain", function() { return authDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "databaseURL", function() { return databaseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageBucket", function() { return storageBucket; });
var apiKey = 'AIzaSyDtqRLvPiZCOAqszre9I_V5nEAzV-KlF1c';
var authDomain = 'ccpvapp.firebaseapp.com';
var databaseURL = 'https://ccpvapp.firebaseio.com';
var storageBucket = 'ccpvapp.appspot.com';
//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
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


var MyApp = /** @class */ (function () {
    function MyApp(platform) {
        this.platform = platform;
        // Segment of the root page
        this.rootPage = 'top';
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "navChild", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/circleci/ccpv/src/app/app.html"*/'<ion-split-pane>\n  <ion-menu [content]="content">\n    <menu [navChild]="navChild"></menu>\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content main swipeBackEnabled="false"></ion-nav>\n</ion-split-pane>\n'/*ion-inline-end:"/home/circleci/ccpv/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__menu__["a" /* MenuComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__menu__["a" /* MenuComponent */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__menu__["a" /* MenuComponent */]]
        })
    ], MenuModule);
    return MenuModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_authentication__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_constants__ = __webpack_require__(683);
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




var MenuComponent = /** @class */ (function () {
    function MenuComponent(authenticationProvider, changeDetectorRef, loadingCtrl, toastCtrl) {
        this.authenticationProvider = authenticationProvider;
        this.changeDetectorRef = changeDetectorRef;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationProvider
            .getObserver()
            .subscribe(function (isAuthenticated) {
            _this.isAuthenticated = isAuthenticated;
            _this.changeDetectorRef.detectChanges();
        });
    };
    MenuComponent.prototype.open = function (pageName) {
        // 現在開いているページをメニューから開こうとした場合は移動しない
        if (this.navChild.getActive().id === pageName) {
            return;
        }
        this.navChild.push(pageName);
    };
    MenuComponent.prototype.signIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = this.loadingCtrl.create();
                        this.loading.present();
                        return [4 /*yield*/, this.authenticationProvider.authentication()];
                    case 1:
                        _a.sent();
                        this.loading.dismiss();
                        this.toastCtrl.create({
                            message: 'ログインしました',
                            duration: __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* TOAST_DURATION */],
                            position: __WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* TOAST_POSITION */]
                        }).present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuComponent.prototype.signOut = function () {
        this.authenticationProvider.reset();
        this.toastCtrl.create({
            message: 'ログアウトしました',
            duration: __WEBPACK_IMPORTED_MODULE_3__constants_constants__["a" /* TOAST_DURATION */],
            position: __WEBPACK_IMPORTED_MODULE_3__constants_constants__["b" /* TOAST_POSITION */]
        }).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */])
    ], MenuComponent.prototype, "navChild", void 0);
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'menu',template:/*ion-inline-start:"/home/circleci/ccpv/src/components/menu/menu.html"*/'<ion-content>\n  <ion-list>\n    <ion-list-header>\n      CCPV\n    </ion-list-header>\n    <button menuClose ion-item (click)="open(\'top\')">\n      <ion-icon name="home" item-left></ion-icon>\n      トップ\n    </button>\n    <button menuClose ion-item (click)="open(\'list\')" *ngIf="isAuthenticated">\n      <ion-icon name="list" item-left></ion-icon>\n      リスト\n    </button>\n    <button menuClose ion-item *ngIf="!isAuthenticated" (click)="signIn()">\n      <ion-icon name="log-in" item-left></ion-icon>\n      ログイン\n    </button>\n    <button menuClose ion-item *ngIf="isAuthenticated" (click)="signOut()">\n      <ion-icon name="log-out" item-left></ion-icon>\n      ログアウト\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/circleci/ccpv/src/components/menu/menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_authentication__["a" /* AuthenticationProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
    ], MenuComponent);
    return MenuComponent;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOAST_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TOAST_POSITION; });
var TOAST_DURATION = 3000;
var TOAST_POSITION = 'bottom';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_storage__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_url__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_firebase__ = __webpack_require__(662);
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







__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_6__constants_firebase__);
var AuthenticationProvider = /** @class */ (function () {
    function AuthenticationProvider(http) {
        this.http = http;
        // Firebase
        this.firebase = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a;
        this.provider = new __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth.TwitterAuthProvider();
        this.firebaseIdToken = null;
        this.accessToken = null;
        this.accessTokenSecret = null;
        // Flag
        this.isAuthenticated = false;
        this.emitter = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](this.isAuthenticated);
        this.apiKey = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_4__constants_storage__["a" /* local */].apiKey);
        this.userId = parseInt(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_4__constants_storage__["a" /* local */].userId));
        this.userName = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_4__constants_storage__["a" /* local */].userName);
        this.setAuthenticateStatus(this.apiKey !== null);
    }
    AuthenticationProvider.prototype.authentication = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, authenticated, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.isAuthenticated) {
                            return [2 /*return*/, this.apiKey];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.firebase
                                .auth()
                                .signInWithPopup(this.provider)];
                    case 2:
                        response = _b.sent();
                        _a = this;
                        return [4 /*yield*/, response.user.getIdToken()];
                    case 3:
                        _a.firebaseIdToken = _b.sent();
                        // any ではなく TwitterCredential を使うべきだが参照できないので any を使用する
                        this.accessToken = response.credential.accessToken;
                        this.accessTokenSecret = response.credential.secret;
                        return [4 /*yield*/, this.http.post("" + __WEBPACK_IMPORTED_MODULE_5__constants_url__["b" /* url */] + __WEBPACK_IMPORTED_MODULE_5__constants_url__["a" /* endpoints */].authentication, {
                                firebase_id_token: this.firebaseIdToken,
                                access_token: this.accessToken,
                                access_token_secret: this.accessTokenSecret
                            }).toPromise()];
                    case 4:
                        authenticated = _b.sent();
                        this.userId = authenticated.id;
                        this.userName = authenticated.name;
                        this.apiKey = authenticated.api_key;
                        // 取得したキーを保存する
                        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_4__constants_storage__["a" /* local */].userId, this.userId.toString());
                        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_4__constants_storage__["a" /* local */].userName, this.userName);
                        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_4__constants_storage__["a" /* local */].apiKey, this.apiKey);
                        // 認証済みにする
                        this.setAuthenticateStatus(true);
                        return [2 /*return*/, this.apiKey];
                    case 5:
                        error_1 = _b.sent();
                        throw error_1;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /** ユーザデータを削除する */
    AuthenticationProvider.prototype.reset = function () {
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_4__constants_storage__["a" /* local */].userId);
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_4__constants_storage__["a" /* local */].userName);
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_4__constants_storage__["a" /* local */].apiKey);
        this.setAuthenticateStatus(false);
    };
    AuthenticationProvider.prototype.getObserver = function () {
        return this.emitter.asObservable();
    };
    AuthenticationProvider.prototype.requestHeaders = function () {
        return {
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Key': this.apiKey
            }
        };
    };
    AuthenticationProvider.prototype.setAuthenticateStatus = function (status) {
        this.isAuthenticated = status;
        this.emitter.next(this.isAuthenticated);
    };
    AuthenticationProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationProvider);
    return AuthenticationProvider;
}());

//# sourceMappingURL=authentication.js.map

/***/ })

},[342]);
//# sourceMappingURL=main.js.map