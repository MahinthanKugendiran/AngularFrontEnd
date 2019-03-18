"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var http_2 = require("@angular/common/http");
var core_1 = require("@angular/core");
var ngx_select_dropdown_1 = require("ngx-select-dropdown");
var app_component_1 = require("./app.component");
var menubar_component_1 = require("./components/menubar/menubar.component");
var router_1 = require("@angular/router");
var navigationmenu_component_1 = require("./components/navigationmenu/navigationmenu.component");
var ng_snotify_1 = require("ng-snotify");
var ng5_breadcrumb_1 = require("ng5-breadcrumb");
var datepicker_1 = require("ngx-bootstrap/datepicker");
var Util_1 = require("../shared/Util");
var auth_guard_1 = require("../shared/auth.guard");
var conformEqualValidator_directive_1 = require("../shared/conformEqualValidator.directive");
var login_component_1 = require("./components/login/login.component");
var AdminService_1 = require("../services/AdminService");
var salesitem_component_1 = require("./components/salesitem/salesitem.component");
var SalesItemService_1 = require("../services/SalesItemService");
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
//# sourceMappingURL=app.module.js.map