import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorage } from '../shared/Util';


@Injectable()
export class AdminService {

    constructor(private http: Http, private ls: LocalStorage) { }

    private token: string = "";
    private tokenExpiration: Date;
    private loggedInUserName: string;
    private loggedInUserRole: string;
    private loggedInUserRoleId: string;
   

    public navMenuDeleteMsg: string;
    public navMenuDeleteSuccesStatus: boolean = false;
    public logoutMessage: any;

    public isEmailSend: boolean = false;

   
    public Login(creds) {
        return this.http.post("/api/Admin/loggin", creds)
            .map(response => {
                let tokenInfo = response.json();

                this.token = tokenInfo.token;
                this.tokenExpiration = tokenInfo.expiration;
                this.loggedInUserName = tokenInfo.userName;
                this.loggedInUserRole = tokenInfo.userRole;
                this.loggedInUserRoleId = tokenInfo.userRoleId;
             
                                                           
                if (this.token.length != 0) {             
                    this.ls.setLocalStorageValue("tokenExpiration", new Date(this.tokenExpiration).toString());
                    this.ls.setLocalStorageValue("loggedInUserName", this.loggedInUserName);
                    this.ls.setLocalStorageValue("loggedInUserRole", this.loggedInUserRole);
                    this.ls.setLocalStorageValue("loggedInUserRoleId", this.loggedInUserRoleId);
                
                }
                return true;
            });
    }

    public logout(): Observable<boolean> {
        return this.http.get("/api/Admin/logout")
            .map((result: Response) =>
                this.logoutMessage = result.json()
            );
    } 
}