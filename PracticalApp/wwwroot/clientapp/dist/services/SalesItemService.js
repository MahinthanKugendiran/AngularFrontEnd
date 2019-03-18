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
//# sourceMappingURL=SalesItemService.js.map