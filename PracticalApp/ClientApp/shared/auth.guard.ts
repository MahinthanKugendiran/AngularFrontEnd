import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorage } from './Util';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,  private ls: LocalStorage) { }

    canActivate() {
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
    }

}