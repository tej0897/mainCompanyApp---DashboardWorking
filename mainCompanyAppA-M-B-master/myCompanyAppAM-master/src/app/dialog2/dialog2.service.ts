import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dialog2 } from './dialog2';

@Injectable({
  providedIn: 'root'
})
export class Dialog2Service {

  constructor(private http:HttpClient) { }

  API = 'http://localhost:8081/api/stocks';

  stockList: Dialog2[] | any;


  public addStock(cid: number, stock: Dialog2) {
    return this.http.post(this.API + '/add/' + cid, stock);
  }

  public getStock(id : number): Observable<any>{
    let param1 = new HttpParams().set('stockID', id);
    return this.http.get(this.API + 'getAllStocks', {params:param1});
  }
}
