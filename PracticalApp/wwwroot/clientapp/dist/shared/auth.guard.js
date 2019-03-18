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
var Util_1 = require("./Util");
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
//# sourceMappingURL=auth.guard.js.map