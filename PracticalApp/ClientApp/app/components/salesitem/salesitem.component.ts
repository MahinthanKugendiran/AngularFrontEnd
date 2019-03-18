import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { AdminService } from "../../../services/AdminService";
import { LocalStorage } from "../../../shared/Util";
import { SalesItemService } from "../../../services/SalesItemService";
import { SalesItems } from "../../../dto/SalesItem";
declare var $: any;

@Component({
    selector: "salesitem",
    templateUrl: "salesitem.component.html"
})
export class SalesItem {




    constructor(private router: Router, private titleService: Title, public adminService: AdminService, private ls: LocalStorage, public salesitemService: SalesItemService, ) { }

    private tableWidget1: any;
    private salesitem_Tbl: any;

    SalesItemAdded =
        {
            Distributor: "",
            FieldOfficer: "",
            RetailShop: "",
            EndUsers:""
        }

    SalesEdited =
        {
            SaleItemId:"",
            Distributor: "",
            FieldOfficer: "",
            RetailShop: "",
            EndUsers: ""
        }

    public addbtn: boolean = true;
    public editbtn: boolean = false;

    public SaleItemsss: SalesItems[] = [];

   


    ngOnInit(): void {
        this.titleService.setTitle('SaleItem');
        this.getSalesItem();
       this.ClickOnSalesItemTable();
       
    }

    Add() {
        if (this.SalesItemAdded.Distributor != "" && this.SalesItemAdded.FieldOfficer!="" && this.SalesItemAdded.RetailShop !="" && this.SalesItemAdded.EndUsers != "" ) {

            this.salesitemService.addSalesItem(this.SalesItemAdded)
                .subscribe(
                    data => {
                        this.getSalesItem();
                    },
                    error => {

                    }
                );

        } else {
            alert("Please fill all Inuput Fields");
        }
      
    }

    getSalesItem() {
        this.salesitemService.getSalesItem()
            .subscribe(success => {
                if (success) {
                    this.SaleItemsss = this.salesitemService.saleitemss;
                    this.salesItem_table();
                }
            });
    }


    ClickOnSalesItemTable() {
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
    }
    EditSalesItem(Ddata: any) {
        this.addbtn = false;
        this.editbtn = true;

        this.SalesItemAdded.Distributor = Ddata.Distributor;
        this.SalesItemAdded.EndUsers = Ddata.EndUsers;
        this.SalesItemAdded.FieldOfficer = Ddata.FieldOfficer;
        this.SalesItemAdded.RetailShop = Ddata.RetailShop;

        this.SalesEdited.SaleItemId = Ddata.SaleItemId;

    }

    Update() {
        this.SalesEdited.Distributor = this.SalesItemAdded.Distributor;
        this.SalesEdited.EndUsers = this.SalesItemAdded.EndUsers;
        this.SalesEdited.FieldOfficer = this.SalesItemAdded.FieldOfficer;
        this.SalesEdited.RetailShop = this.SalesItemAdded.RetailShop;

     
        if (this.SalesEdited != null) {
            this.salesitemService.editSalesItem(this.SalesEdited)
                .subscribe(
                    data => {
                        this.getSalesItem();
                    },
                    error => {

                    }
                );
        }
        else {
            alert("Please insert details");
        }
    }

    public salesItem_table(): void {
        if (this.tableWidget1) {
            this.tableWidget1.destroy();
        }
        let tableOptions: any = {
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
        }
        this.salesitem_Tbl = $('#salesitemTable');
        this.tableWidget1 = this.salesitem_Tbl.DataTable(tableOptions);
    }
}