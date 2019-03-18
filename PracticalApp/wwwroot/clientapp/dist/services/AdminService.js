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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Util_1 = require("../shared/Util");
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
//# sourceMappingURL=AdminService.js.map