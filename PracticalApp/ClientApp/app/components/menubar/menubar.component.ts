import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
import { LocalStorage } from "../../../shared/Util";
import { AdminService } from "../../../services/AdminService";
//import { NotificationService } from "../../services/NotificationService";
//import { DataService } from "../../services/dataService";
//import { AdminService } from "../../services/AdminService";
//import { LocalStorage } from "../../shared/Util";
declare var $: any;


@Component({
    selector: "menubar",
    templateUrl: "menubar.component.html"
})
export class Menubar  {
    constructor(private activatedRoute: ActivatedRoute, private router: Router, private ls: LocalStorage, private adminService: AdminService) { }

   // public loggedInUserName: string = "";

    ngOnInit() {
       // this.loggedInUserName =  this.ls.getLocalStorageValue("loggedInUserName");
    }

    logout() {
        this.adminService.logout()
            .subscribe(
                data => {
                    if (this.adminService.logoutMessage) {
                        localStorage.clear();
                        location.reload();
                    } else {

                    }
                },
                error => {

                }
            );
    }

 }
