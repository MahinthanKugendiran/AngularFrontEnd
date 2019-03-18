webpackJsonp(["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"theme-loader\">\r\n    <div class=\"loader-track\">\r\n        <div class=\"preloader-wrapper\">\r\n            <div class=\"spinner-layer spinner-blue\">\r\n                <div class=\"circle-clipper left\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"spinner-layer spinner-red\">\r\n                <div class=\"circle-clipper left\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"spinner-layer spinner-yellow\">\r\n                <div class=\"circle-clipper left\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"spinner-layer spinner-green\">\r\n                <div class=\"circle-clipper left\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"gap-patch\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n                <div class=\"circle-clipper right\">\r\n                    <div class=\"circle\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-container *ngIf=\"is_token_expired\">\r\n    <login></login>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"!is_token_expired\">\r\n    <div id=\"pcoded\" class=\"pcoded\">\r\n        <div class=\"pcoded-overlay-box\"></div>\r\n        <div class=\"pcoded-container navbar-wrapper\">\r\n            <menubar></menubar>\r\n\r\n            <div class=\"pcoded-main-container\">\r\n                <div class=\"pcoded-wrapper\">\r\n                    <navigationmenu></navigationmenu>\r\n                    <div class=\"pcoded-content\">\r\n                        <div class=\"page-header\" style=\"\r\n    margin-top: -20px;\r\n\">\r\n                            <div class=\"page-block\">\r\n                                <div class=\"row align-items-center\">\r\n                                    <div class=\"col-md-8\">\r\n                                        <div class=\"page-header-title\">\r\n                                            <!--<h5 class=\"m-b-10\"><breadcrumb prefix=\"\" [useBootstrap]=\"false\"></breadcrumb></h5>\r\n                                            <p class=\"m-b-0\"></p>-->\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4 ims-breadcrumb\">\r\n                                        <!--<breadcrumb prefix=\"Home\" [useBootstrap]=\"false\"></breadcrumb>-->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"pcoded-inner-content\">\r\n                            <div class=\"main-body\">\r\n                                <div class=\"page-wrapper\">\r\n                                    <div class=\"page-body\">\r\n                                        <!--<ng-snotify></ng-snotify>-->\r\n                                        <router-outlet></router-outlet>\r\n                                    </div>\r\n                                </div>\r\n                                <div id=\"styleSelector\"> </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var Util_1 = __webpack_require__("./ClientApp/shared/Util.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, titleService, ls) {
        this.router = router;
        this.titleService = titleService;
        this.ls = ls;
        this.is_token_expired = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.is_token_expired = new Date(this.ls.getLocalStorageValue("tokenExpiration")) < new Date();
        console.log("at Now is token expired:", this.is_token_expired);
        console.log("created token", this.ls.getLocalStorageValue("tokenExpiration"));
        console.log("the loggedIn UserName:", this.ls.getLocalStorageValue("loggedInUserName"));
        console.log("the loggedIn UserRole:", this.ls.getLocalStorageValue("loggedInUserRole"));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./ClientApp/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [router_1.Router, platform_browser_1.Title, Util_1.LocalStorage])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_2 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ngx_select_dropdown_1 = __webpack_require__("./node_modules/ngx-select-dropdown/dist/index.js");
var app_component_1 = __webpack_require__("./ClientApp/app/app.component.ts");
var menubar_component_1 = __webpack_require__("./ClientApp/app/components/menubar/menubar.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var navigationmenu_component_1 = __webpack_require__("./ClientApp/app/components/navigationmenu/navigationmenu.component.ts");
var ng_snotify_1 = __webpack_require__("./node_modules/ng-snotify/index.js");
var ng5_breadcrumb_1 = __webpack_require__("./node_modules/ng5-breadcrumb/index.js");
var datepicker_1 = __webpack_require__("./node_modules/ngx-bootstrap/datepicker/index.js");
var Util_1 = __webpack_require__("./ClientApp/shared/Util.ts");
var auth_guard_1 = __webpack_require__("./ClientApp/shared/auth.guard.ts");
var conformEqualValidator_directive_1 = __webpack_require__("./ClientApp/shared/conformEqualValidator.directive.ts");
var login_component_1 = __webpack_require__("./ClientApp/app/components/login/login.component.ts");
var AdminService_1 = __webpack_require__("./ClientApp/services/AdminService.ts");
var salesitem_component_1 = __webpack_require__("./ClientApp/app/components/salesitem/salesitem.component.ts");
var SalesItemService_1 = __webpack_require__("./ClientApp/services/SalesItemService.ts");
var routes = [
    // { path: "", component: Login, canActivate: [AuthGuard]  },
    { path: "login", component: login_component_1.Login },
    { path: "navigationmenu", component: navigationmenu_component_1.NavigationMenu },
    { path: "menubar", component: menubar_component_1.Menubar },
    { path: "salesitem", component: salesitem_component_1.SalesItem }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.Login,
                menubar_component_1.Menubar,
                navigationmenu_component_1.NavigationMenu,
                conformEqualValidator_directive_1.ConfirmEqualValidatorDirective,
                salesitem_component_1.SalesItem
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_2.HttpClientModule,
                ngx_select_dropdown_1.SelectDropDownModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                //TimepickerModule.forRoot(),
                datepicker_1.BsDatepickerModule.forRoot(),
                datepicker_1.DatepickerModule.forRoot(),
                ng5_breadcrumb_1.Ng5BreadcrumbModule.forRoot(),
                router_1.RouterModule.forRoot(routes, {
                    onSameUrlNavigation: 'reload',
                    useHash: true,
                    enableTracing: false // for Debugging of the Routes
                }),
            ],
            exports: [router_1.RouterModule
            ],
            providers: [
                //  AuthGuard,
                { provide: 'SnotifyToastConfig', useValue: ng_snotify_1.ToastDefaults },
                ng_snotify_1.SnotifyService,
                Util_1.LocalStorage,
                auth_guard_1.AuthGuard,
                AdminService_1.AdminService,
                SalesItemService_1.SalesItemService
                //  NotificationService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./ClientApp/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"login-block\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{errorMessage}}</div>\r\n                <form class=\"md-float-material form-material\" (submit)=\"onLogin()\" #theForm=\"ngForm\" novalidate>\r\n                    <div class=\"text-center\">\r\n                        <img src=\"../files/assets/images/omobioLogo.png\" alt=\"omobiologo\" style=\"height: 90px; width: auto;\">\r\n                    </div>\r\n                    <div class=\"auth-box card\">\r\n                        <div class=\"card-block\">\r\n                            <div class=\"row m-b-20\">\r\n                                <div class=\"col-md-12\">\r\n                                    <h3 class=\"text-center\">Sign In</h3>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group form-primary\" [class.has-error]=\"username.invalid && username.touched\">\r\n                                <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" [(ngModel)]=\"creds.UserName\" #username=\"ngModel\" required>\r\n                                <span class=\"form-bar\"></span>\r\n                                <span class=\"help-block\" *ngIf=\"username.invalid && username.touched\">UserName is Required</span>\r\n                                <label class=\"float-label\">Email</label>\r\n                            </div>\r\n                            <div class=\"form-group form-primary\" [class.has-error]=\"password.invalid && password.touched\">\r\n                                <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"creds.Password\" #password=\"ngModel\" required>\r\n                                <span class=\"form-bar\"></span>\r\n                                <span class=\"help-block\" *ngIf=\"password.invalid && password.touched\">Password is Required</span>\r\n                                <label class=\"float-label\">Password</label>\r\n                            </div>\r\n\r\n                            <div class=\"border-checkbox-section\">\r\n\r\n                                <!--<div class=\"border-checkbox-group border-checkbox-group-primary\">\r\n                                    <label class=\"container1\">\r\n                                        Remember me\r\n                                        <input type=\"checkbox\" checked=\"checked\" id=\"checkbox1\" name=\"rememberme\" [(ngModel)]=\"creds.RememberMe\" #rememberme=\"ngModel\">\r\n                                        <span class=\"checkmark\"></span>\r\n                                    </label>\r\n                                </div>-->\r\n                                <div class=\"forgot-phone text-right f-right\">\r\n                                    <a href=\"#\" class=\"text-right f-w-600\"> Forgot Password?</a>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row m-t-30\">\r\n                                <div class=\"col-md-12\">\r\n                                    <button type=\"submit\" class=\"btn btn-primary btn-md btn-block \" [disabled]=\"theForm.invalid\">Sign in</button>\r\n                                </div>\r\n                            </div>\r\n                            <hr />\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-10\">\r\n                                </div>\r\n                                <div class=\"col-md-2\">\r\n                                    <img src=\"../files/assets/images/omobioLogo.png\" alt=\"omobiologo\" style=\"height: 27px; width: auto;\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./ClientApp/app/components/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var AdminService_1 = __webpack_require__("./ClientApp/services/AdminService.ts");
var Util_1 = __webpack_require__("./ClientApp/shared/Util.ts");
var Login = /** @class */ (function () {
    function Login(router, titleService, adminService, ls) {
        this.router = router;
        this.titleService = titleService;
        this.adminService = adminService;
        this.ls = ls;
        this.creds = {
            UserName: "",
            Password: "",
            RememberMe: false
        };
    }
    Login.prototype.ngOnInit = function () {
        this.titleService.setTitle('Login');
    };
    Login.prototype.onLogin = function () {
        var _this = this;
        this.adminService.Login(this.creds)
            .subscribe(function (data) {
            console.log("created token success:", _this.ls.getLocalStorageValue("tokenExpiration"));
            console.log("the loggedIn User:", _this.ls.getLocalStorageValue("loggedInUserName"));
            _this.router.navigate(['']);
            location.reload();
        }, function (error) {
            _this.errorMessage = "Failed to login";
        });
    };
    Login = __decorate([
        core_1.Component({
            selector: "login",
            template: __webpack_require__("./ClientApp/app/components/login/login.component.html")
        }),
        __metadata("design:paramtypes", [router_1.Router, platform_browser_1.Title, AdminService_1.AdminService, Util_1.LocalStorage])
    ], Login);
    return Login;
}());
exports.Login = Login;


/***/ }),

/***/ "./ClientApp/app/components/menubar/menubar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar header-navbar pcoded-header\">\r\n    <div class=\"navbar-wrapper\">\r\n        <div class=\"navbar-logo\">\r\n           \r\n            <a href=\"index.html\">\r\n                <img class=\"img-fluid\" src=\"../files/assets/images/omobioLogo.png\" alt=\"Theme-Logo\" style=\" width: 94px; height: 53px; margin-top: 0%;\" />\r\n            </a>\r\n          \r\n        </div>\r\n        <div class=\"navbar-container container-fluid\">\r\n          \r\n            <!--<ul class=\"nav-right\">               \r\n                <li class=\"user-profile header-notification\">\r\n                    <a class=\"waves-effect waves-light\">\r\n                        <img src=\"../files/assets/images/avatar-4.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\r\n                        <span>{{ loggedInUserName | uppercase }}</span>\r\n                        <i class=\"ti-angle-down\"></i>\r\n                    </a>\r\n                    <ul class=\"show-notification profile-notification\">\r\n                        <li class=\"waves-effect waves-light\">\r\n                            <a (click)=\"logout()\">\r\n                                <i class=\"ti-layout-sidebar-left\"></i> Logout\r\n                            </a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>-->\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/components/menubar/menubar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Util_1 = __webpack_require__("./ClientApp/shared/Util.ts");
var AdminService_1 = __webpack_require__("./ClientApp/services/AdminService.ts");
var Menubar = /** @class */ (function () {
    function Menubar(activatedRoute, router, ls, adminService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.ls = ls;
        this.adminService = adminService;
    }
    // public loggedInUserName: string = "";
    Menubar.prototype.ngOnInit = function () {
        // this.loggedInUserName =  this.ls.getLocalStorageValue("loggedInUserName");
    };
    Menubar.prototype.logout = function () {
        var _this = this;
        this.adminService.logout()
            .subscribe(function (data) {
            if (_this.adminService.logoutMessage) {
                localStorage.clear();
                location.reload();
            }
            else {
            }
        }, function (error) {
        });
    };
    Menubar = __decorate([
        core_1.Component({
            selector: "menubar",
            template: __webpack_require__("./ClientApp/app/components/menubar/menubar.component.html")
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, Util_1.LocalStorage, AdminService_1.AdminService])
    ], Menubar);
    return Menubar;
}());
exports.Menubar = Menubar;


/***/ }),

/***/ "./ClientApp/app/components/navigationmenu/navigationmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"pcoded-navbar\">\r\n    <div class=\"sidebar_toggle\"><a><i class=\"icon-close icons\"></i></a></div>\r\n    <div class=\"pcoded-inner-navbar main-menu\">\r\n        <div class=\"\">\r\n            <div class=\"main-menu-header\">\r\n                <img class=\"img-80 img-radius\" src=\"../files/assets/images/avatar-4.jpg\" alt=\"User-Profile-Image\">\r\n                <div class=\"user-details\">\r\n                    <span id=\"more-details\">{{  loggedUserRole }} <i class=\"fa fa-caret-down\"></i></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"main-menu-content\">\r\n                <ul>\r\n                    <li class=\"more-details waves-effect waves-light\">\r\n                        <a (click)=\"logout()\"><i class=\"ti-layout-sidebar-left\"></i>Logout</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"p-15 p-b-0\">\r\n            <div class=\"pcoded-navigation-label\" menu-title-theme=\"theme1\">Navigation</div>\r\n        </div>\r\n        <ul class=\"pcoded-item pcoded-left-item\">\r\n            <li>\r\n                <a href=\"#/salesitem\" class=\"waves-effect waves-dark\">\r\n                    <span class=\"pcoded-micon\"><i class=\"ti-layout-cta-right\"></i><b>N</b></span>\r\n                    <span class=\"pcoded-mtext\">SaleItem Management</span>\r\n                    <span class=\"pcoded-mcaret\"></span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n\r\n    </div>\r\n</nav>\r\n\r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/components/navigationmenu/navigationmenu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var ng_snotify_1 = __webpack_require__("./node_modules/ng-snotify/index.js");
var Util_1 = __webpack_require__("./ClientApp/shared/Util.ts");
var NavigationMenu = /** @class */ (function () {
    function NavigationMenu(router, titleService, snotifyService, ls) {
        this.router = router;
        this.titleService = titleService;
        this.snotifyService = snotifyService;
        this.ls = ls;
        //variables for store Token's Data
        this.loggedInUserName = "";
        this.loggedUserRole = "";
        this.loggedUserRoleId = "";
    }
    NavigationMenu.prototype.ngOnInit = function () {
        //____________getting Token's Data_______________
        this.loggedInUserName = this.ls.getLocalStorageValue("loggedInUserName");
        this.loggedUserRole = this.ls.getLocalStorageValue("loggedInUserRole");
        this.loggedUserRoleId = this.ls.getLocalStorageValue("loggedInUserRoleId");
    };
    NavigationMenu = __decorate([
        core_1.Component({
            selector: "navigationmenu",
            template: __webpack_require__("./ClientApp/app/components/navigationmenu/navigationmenu.component.html")
        }),
        __metadata("design:paramtypes", [router_1.Router, platform_browser_1.Title, ng_snotify_1.SnotifyService,
            Util_1.LocalStorage])
    ], NavigationMenu);
    return NavigationMenu;
}());
exports.NavigationMenu = NavigationMenu;


/***/ }),

/***/ "./ClientApp/app/components/salesitem/salesitem.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-body\">\r\n    <div class=\"page-wrapper\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h5>Manage SaleItem</h5>\r\n                    </div>\r\n                    <div class=\"card-block \">\r\n                        <form>\r\n                            <div class=\"form-group row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <label for=\"exampleInputDistributor\">Distributor</label>\r\n                                    <input type=\"text\"\r\n                                           class=\"form-control\"\r\n                                           id=\"exampleInputDistributor\"\r\n                                           name=\"distributor\"\r\n                                           [(ngModel)]=\"SalesItemAdded.Distributor\">\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <label for=\"exampleInputFieldOfficer\">FieldOfficer</label>\r\n                                    <input type=\"text\"\r\n                                           class=\"form-control\"\r\n                                           id=\"exampleInputFieldOfficer\"\r\n                                           name=\"dieldOfficer\"\r\n                                           [(ngModel)]=\"SalesItemAdded.FieldOfficer\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <label for=\"exampleInputRetailShop\">RetailShop</label>\r\n                                    <input type=\"text\"\r\n                                           class=\"form-control\"\r\n                                           id=\"exampleInputRetailShop\"\r\n                                           name=\"retailShop\"\r\n                                           [(ngModel)]=\"SalesItemAdded.RetailShop\">\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <label for=\"exampleInputEndUsers\">EndUsers</label>\r\n                                    <input type=\"text\"\r\n                                           class=\"form-control\"\r\n                                           id=\"exampleInputEndUsers\"\r\n                                           name=\"endUsers\"\r\n                                           [(ngModel)]=\"SalesItemAdded.EndUsers\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n\r\n                                <div class=\"col-sm-offset-10 col-sm-2\">\r\n                                    <button *ngIf=\"addbtn\" type=\"button\" class=\"btn btn-success  btn-md pull-right\" (click)=\"Add()\">Add</button>\r\n                                    <button *ngIf=\"editbtn\" type=\"button\" class=\"btn btn-success  btn-md pull-right\" (click)=\"Update()\">Update</button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n\r\n                        <hr />\r\n\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header\">\r\n                                <h5>Added SalesItem</h5>\r\n                            </div>\r\n\r\n                            <div class=\"card-block\">\r\n                                <div class=\"table-responsive\">\r\n                                    <table id=\"salesitemTable\" class=\"table table-striped table-bordered no-footer\"></table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/components/salesitem/salesitem.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var AdminService_1 = __webpack_require__("./ClientApp/services/AdminService.ts");
var Util_1 = __webpack_require__("./ClientApp/shared/Util.ts");
var SalesItemService_1 = __webpack_require__("./ClientApp/services/SalesItemService.ts");
var SalesItem = /** @class */ (function () {
    function SalesItem(router, titleService, adminService, ls, salesitemService) {
        this.router = router;
        this.titleService = titleService;
        this.adminService = adminService;
        this.ls = ls;
        this.salesitemService = salesitemService;
        this.SalesItemAdded = {
            Distributor: "",
            FieldOfficer: "",
            RetailShop: "",
            EndUsers: ""
        };
        this.SalesEdited = {
            SaleItemId: "",
            Distributor: "",
            FieldOfficer: "",
            RetailShop: "",
            EndUsers: ""
        };
        this.addbtn = true;
        this.editbtn = false;
        this.SaleItemsss = [];
    }
    SalesItem.prototype.ngOnInit = function () {
        this.titleService.setTitle('SaleItem');
        this.getSalesItem();
        this.ClickOnSalesItemTable();
    };
    SalesItem.prototype.Add = function () {
        var _this = this;
        if (this.SalesItemAdded.Distributor != "" && this.SalesItemAdded.FieldOfficer != "" && this.SalesItemAdded.RetailShop != "" && this.SalesItemAdded.EndUsers != "") {
            this.salesitemService.addSalesItem(this.SalesItemAdded)
                .subscribe(function (data) {
                _this.getSalesItem();
            }, function (error) {
            });
        }
        else {
            alert("Please fill all Inuput Fields");
        }
    };
    SalesItem.prototype.getSalesItem = function () {
        var _this = this;
        this.salesitemService.getSalesItem()
            .subscribe(function (success) {
            if (success) {
                _this.SaleItemsss = _this.salesitemService.saleitemss;
                _this.salesItem_table();
            }
        });
    };
    SalesItem.prototype.ClickOnSalesItemTable = function () {
        var self2 = this;
        $('#salesitemTable').on('click', 'button', function () {
            var fired_button = $(this).val();
            var table = $('#salesitemTable').DataTable();
            var Ddata = table.row($(this).parents('tr')).data();
            console.log(fired_button);
            console.log("edit button clicked on salesItem table", Ddata);
            if (fired_button == "Edit_Button1") {
                self2.EditSalesItem(Ddata);
            }
        });
    };
    SalesItem.prototype.EditSalesItem = function (Ddata) {
        this.addbtn = false;
        this.editbtn = true;
        this.SalesItemAdded.Distributor = Ddata.Distributor;
        this.SalesItemAdded.EndUsers = Ddata.EndUsers;
        this.SalesItemAdded.FieldOfficer = Ddata.FieldOfficer;
        this.SalesItemAdded.RetailShop = Ddata.RetailShop;
        this.SalesEdited.SaleItemId = Ddata.SaleItemId;
    };
    SalesItem.prototype.Update = function () {
        var _this = this;
        this.SalesEdited.Distributor = this.SalesItemAdded.Distributor;
        this.SalesEdited.EndUsers = this.SalesItemAdded.EndUsers;
        this.SalesEdited.FieldOfficer = this.SalesItemAdded.FieldOfficer;
        this.SalesEdited.RetailShop = this.SalesItemAdded.RetailShop;
        if (this.SalesEdited != null) {
            this.salesitemService.editSalesItem(this.SalesEdited)
                .subscribe(function (data) {
                _this.getSalesItem();
            }, function (error) {
            });
        }
        else {
            alert("Please insert details");
        }
    };
    SalesItem.prototype.salesItem_table = function () {
        if (this.tableWidget1) {
            this.tableWidget1.destroy();
        }
        var tableOptions = {
            data: this.SaleItemsss,
            dom: 'bfrtip',
            select: true,
            columns: [
                { title: 'Distributor', data: 'Distributor' },
                { title: 'FieldOfficer', data: 'FieldOfficer' },
                { title: 'RetailShop', data: 'RetailShop' },
                { title: 'EndUsers', data: 'EndUsers' },
                {
                    title: 'Update',
                    data: null, render: function (data, type, row) {
                        return '<button id="Editbtn1" class="btn btn-primary btn-sm editbutton tbl-btn" style="width:70px!important;" value="Edit_Button1">Edit</button>';
                    }
                },
                {
                    title: 'Remove',
                    data: null, render: function (data, type, row) {
                        return '<button id="Delbtn1" class="btn btn-danger btn-sm deletebutton tbl-btn" style="width:70px!important;" value="Del_Button1">Delete</button>';
                    }
                }
            ],
            buttons: [
                'print'
            ]
        };
        this.salesitem_Tbl = $('#salesitemTable');
        this.tableWidget1 = this.salesitem_Tbl.DataTable(tableOptions);
    };
    SalesItem = __decorate([
        core_1.Component({
            selector: "salesitem",
            template: __webpack_require__("./ClientApp/app/components/salesitem/salesitem.component.html")
        }),
        __metadata("design:paramtypes", [router_1.Router, platform_browser_1.Title, AdminService_1.AdminService, Util_1.LocalStorage, SalesItemService_1.SalesItemService])
    ], SalesItem);
    return SalesItem;
}());
exports.SalesItem = SalesItem;


/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: true
};


/***/ }),

/***/ "./ClientApp/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./ClientApp/app/app.module.ts");
var environment_1 = __webpack_require__("./ClientApp/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./ClientApp/services/AdminService.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Util_1 = __webpack_require__("./ClientApp/shared/Util.ts");
var AdminService = /** @class */ (function () {
    function AdminService(http, ls) {
        this.http = http;
        this.ls = ls;
        this.token = "";
        this.navMenuDeleteSuccesStatus = false;
        this.isEmailSend = false;
    }
    AdminService.prototype.Login = function (creds) {
        var _this = this;
        return this.http.post("/api/Admin/loggin", creds)
            .map(function (response) {
            var tokenInfo = response.json();
            _this.token = tokenInfo.token;
            _this.tokenExpiration = tokenInfo.expiration;
            _this.loggedInUserName = tokenInfo.userName;
            _this.loggedInUserRole = tokenInfo.userRole;
            _this.loggedInUserRoleId = tokenInfo.userRoleId;
            if (_this.token.length != 0) {
                _this.ls.setLocalStorageValue("tokenExpiration", new Date(_this.tokenExpiration).toString());
                _this.ls.setLocalStorageValue("loggedInUserName", _this.loggedInUserName);
                _this.ls.setLocalStorageValue("loggedInUserRole", _this.loggedInUserRole);
                _this.ls.setLocalStorageValue("loggedInUserRoleId", _this.loggedInUserRoleId);
            }
            return true;
        });
    };
    AdminService.prototype.logout = function () {
        var _this = this;
        return this.http.get("/api/Admin/logout")
            .map(function (result) {
            return _this.logoutMessage = result.json();
        });
    };
    AdminService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, Util_1.LocalStorage])
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;


/***/ }),

/***/ "./ClientApp/services/SalesItemService.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Util_1 = __webpack_require__("./ClientApp/shared/Util.ts");
var SalesItemService = /** @class */ (function () {
    function SalesItemService(http, ls) {
        this.http = http;
        this.ls = ls;
        this.saleitemss = [];
        this.studentDeleteSuccesStatus = false;
    }
    SalesItemService.prototype.addSalesItem = function (salesItem) {
        return this.http.post("/api/SalesItem/addSalesItem", salesItem)
            .map(function (res) {
            console.log(res.json());
            return res.json().data;
        });
    };
    SalesItemService.prototype.getSalesItem = function () {
        var _this = this;
        return this.http.get("api/SalesItem/getSalesItem")
            .map(function (result) {
            return _this.saleitemss = result.json();
        });
    };
    SalesItemService.prototype.editSalesItem = function (editedSalesItem) {
        return this.http.post("api/SalesItem/editSalesItem", editedSalesItem)
            .map(function (res) {
            console.log(res.json());
        });
    };
    SalesItemService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, Util_1.LocalStorage])
    ], SalesItemService);
    return SalesItemService;
}());
exports.SalesItemService = SalesItemService;


/***/ }),

/***/ "./ClientApp/shared/Util.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CryptoJS = __webpack_require__("./node_modules/crypto-js/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var LocalStorage = /** @class */ (function () {
    function LocalStorage(router) {
        this.router = router;
    }
    LocalStorage.prototype.setLocalStorageValue = function (key, value) {
        var encrypted = CryptoJS.AES.encrypt(value, '123').toString();
        localStorage.setItem(key, encrypted); //store a localStorage as with key tokenExpiration, value encrypted
    };
    LocalStorage.prototype.getLocalStorageValue = function (key) {
        var en_key = localStorage.getItem(key);
        if (en_key != null) {
            var decrypted = CryptoJS.AES.decrypt(en_key, '123');
            return decrypted.toString(CryptoJS.enc.Utf8);
        }
        else {
            return null;
        }
    };
    LocalStorage = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], LocalStorage);
    return LocalStorage;
}());
exports.LocalStorage = LocalStorage;


/***/ }),

/***/ "./ClientApp/shared/auth.guard.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var Util_1 = __webpack_require__("./ClientApp/shared/Util.ts");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, ls) {
        this.router = router;
        this.ls = ls;
    }
    AuthGuard.prototype.canActivate = function () {
        var is_token_expired = new Date(this.ls.getLocalStorageValue("tokenExpiration")) < new Date();
        if (!is_token_expired) {
            console.log("canActivate value:", !is_token_expired);
            return true;
        }
        else {
            location.reload();
            this.router.navigate(['login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, Util_1.LocalStorage])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "./ClientApp/shared/conformEqualValidator.directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ConfirmEqualValidatorDirective = /** @class */ (function () {
    function ConfirmEqualValidatorDirective() {
    }
    ConfirmEqualValidatorDirective_1 = ConfirmEqualValidatorDirective;
    ConfirmEqualValidatorDirective.prototype.validate = function (control) {
        var controllToCompare = control.parent.get(this.appConfirmEqualValidator);
        if (controllToCompare && controllToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ConfirmEqualValidatorDirective.prototype, "appConfirmEqualValidator", void 0);
    ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = __decorate([
        core_1.Directive({
            selector: '[appConfirmEqualValidator]',
            providers: [{
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: ConfirmEqualValidatorDirective_1,
                    multi: true
                }]
        })
    ], ConfirmEqualValidatorDirective);
    return ConfirmEqualValidatorDirective;
    var ConfirmEqualValidatorDirective_1;
}());
exports.ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective;


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map