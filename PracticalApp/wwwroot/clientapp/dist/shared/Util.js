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
var CryptoJS = require("crypto-js");
var router_1 = require("@angular/router");
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
//# sourceMappingURL=Util.js.map