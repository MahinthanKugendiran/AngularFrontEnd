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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var ng_snotify_1 = require("ng-snotify");
var Util_1 = require("../../../shared/Util");
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
            templateUrl: "navigationmenu.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, platform_browser_1.Title, ng_snotify_1.SnotifyService,
            Util_1.LocalStorage])
    ], NavigationMenu);
    return NavigationMenu;
}());
exports.NavigationMenu = NavigationMenu;
//# sourceMappingURL=navigationmenu.component.js.map