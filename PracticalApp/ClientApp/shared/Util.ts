import { Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js";
import { ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable()
export class LocalStorage {


    constructor(private router: Router) { }

    public setLocalStorageValue(key: string, value: string) {

        var encrypted = CryptoJS.AES.encrypt(value, '123').toString();
        localStorage.setItem(key, encrypted);//store a localStorage as with key tokenExpiration, value encrypted
    }

    public getLocalStorageValue(key: string): string {

        let en_key = localStorage.getItem(key);
        if (en_key != null) {
            var decrypted = CryptoJS.AES.decrypt(en_key, '123');
            return decrypted.toString(CryptoJS.enc.Utf8);
        } else {
            return null;
        }

    }

}