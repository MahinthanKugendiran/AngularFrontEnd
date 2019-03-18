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
var Util_1 = require("../shared/Util");
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
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [router_1.Router, platform_browser_1.Title, Util_1.LocalStorage])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map