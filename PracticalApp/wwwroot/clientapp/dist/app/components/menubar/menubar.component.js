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
var Util_1 = require("../../../shared/Util");
var AdminService_1 = require("../../../services/AdminService");
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
            templateUrl: "menubar.component.html"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, Util_1.LocalStorage, AdminService_1.AdminService])
    ], Menubar);
    return Menubar;
}());
exports.Menubar = Menubar;
//# sourceMappingURL=menubar.component.js.map