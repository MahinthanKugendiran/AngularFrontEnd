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
var AdminService_1 = require("../../../services/AdminService");
var Util_1 = require("../../../shared/Util");
var SalesItemService_1 = require("../../../services/SalesItemService");
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
            templateUrl: "salesitem.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, platform_browser_1.Title, AdminService_1.AdminService, Util_1.LocalStorage, SalesItemService_1.SalesItemService])
    ], SalesItem);
    return SalesItem;
}());
exports.SalesItem = SalesItem;
//# sourceMappingURL=salesitem.component.js.map