import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorage } from '../shared/Util';

import { SalesItem } from '../app/components/salesitem/salesitem.component';
import { SalesItems } from '../dto/SalesItem';


@Injectable()
export class SalesItemService {

    constructor(private http: Http, private ls: LocalStorage) { }

    public saleitemss: SalesItems[] = [];

    public studentDeleteDeleteMsg: string;
    public studentDeleteSuccesStatus: boolean = false;

    public addSalesItem(salesItem) {
        return this.http.post("/api/SalesItem/addSalesItem", salesItem)
            .map(res => {
                console.log(res.json());
                return res.json().data;
            });
    }

    public getSalesItem(): Observable<SalesItems[]> {
        return this.http.get("api/SalesItem/getSalesItem")
            .map((result: Response) =>
                this.saleitemss = result.json()
            );
    }

    public editSalesItem(editedSalesItem) {
        return this.http.post("api/SalesItem/editSalesItem", editedSalesItem)
            .map(res => {
                console.log(res.json());
            });
    }
  

}