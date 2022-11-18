import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dialog2 } from './dialog2';

@Injectable({
  providedIn: 'root',
})
export class Dialog2Service {
  constructor(private http: HttpClient) {}

  stockList: Dialog2[] | any;

  public addStock(cid: number, stock: Dialog2) {
    return this.http.post(
      'http://localhost:8081/api/stocks/add/' +
        cid,
      stock
    );
  }

  public getStock(id: number): Observable<Array<Dialog2>> {
    return this.http.get<Array<Dialog2>>(
      'http://localhost:8081/api/stocks/add/getAllStocks/' +
        id
    );
  }
}
