import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LocalStorage } from '../shared/Util';

@Component({
  selector: 'app-root',
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
    
   

    public is_token_expired: boolean = false;
  
    constructor(public router: Router, private titleService: Title, private ls: LocalStorage) { }

    ngOnInit(): void {
        this.is_token_expired = new Date(this.ls.getLocalStorageValue("tokenExpiration")) < new Date();
        console.log("at Now is token expired:", this.is_token_expired);
        console.log("created token", this.ls.getLocalStorageValue("tokenExpiration"));
        console.log("the loggedIn UserName:", this.ls.getLocalStorageValue("loggedInUserName"));
        console.log("the loggedIn UserRole:", this.ls.getLocalStorageValue("loggedInUserRole"));

    } 

}
