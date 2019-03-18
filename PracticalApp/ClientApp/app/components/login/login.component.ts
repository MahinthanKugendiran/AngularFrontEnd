import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Title } from '@angular/platform-browser';
import { AdminService } from "../../../services/AdminService";
import { LocalStorage } from "../../../shared/Util";
declare var $: any;

@Component({
    selector: "login",
    templateUrl: "login.component.html"
})
export class Login {

    public creds = {
        UserName: "",
        Password: "",
        RememberMe: false
    };


    errorMessage: string;
   
    constructor(private router: Router, private titleService: Title, public adminService: AdminService, private ls: LocalStorage) { }

    ngOnInit(): void {
        this.titleService.setTitle('Login');
    }

    onLogin() {
        this.adminService.Login(this.creds)
            .subscribe(
                data => {
                    console.log("created token success:", this.ls.getLocalStorageValue("tokenExpiration"));
                    console.log("the loggedIn User:", this.ls.getLocalStorageValue("loggedInUserName"));
                    this.router.navigate(['']);
                    location.reload();
                },
                error => {
                    this.errorMessage = "Failed to login"
                });
    }
}