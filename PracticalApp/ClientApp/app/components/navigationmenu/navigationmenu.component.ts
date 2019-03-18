import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { SnotifyService } from "ng-snotify";
import { LocalStorage } from "../../../shared/Util";
declare var $: any;

@Component({
    selector: "navigationmenu",
    templateUrl: "navigationmenu.component.html"
})
export class NavigationMenu {


    //variables for store Token's Data
    public loggedInUserName: string = "";
    public loggedUserRole: string = "";
    public loggedUserRoleId: string = "";



    constructor(private router: Router, private titleService: Title, private snotifyService: SnotifyService,
        private ls: LocalStorage, ) { }
       

    ngOnInit(): void {
        //____________getting Token's Data_______________
        this.loggedInUserName = this.ls.getLocalStorageValue("loggedInUserName");
        this.loggedUserRole = this.ls.getLocalStorageValue("loggedInUserRole");
        this.loggedUserRoleId = this.ls.getLocalStorageValue("loggedInUserRoleId");


    }

}