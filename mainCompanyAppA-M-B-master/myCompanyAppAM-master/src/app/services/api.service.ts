import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../dialog/company';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8081/api/v1';

  public addCompany(companyData: any) {
    return this.http.post('http://localhost:8081/api/v1/addCompany', companyData);
  }

  public getAllCompany():Observable<Array<Company>>{
    return this.http.get<Array<Company>>('http://localhost:8081/api/v1/getAllCompanies');
  }

  public putCompany(data: any, id : number){
    return this.http.put<any>("http://localhost:8081/api/v1/updateCompany/"+id, data);
  }

  public deleteCompany(id: number){
    return this.http.delete<any>("http://localhost:8081/api/v1/deleteCompany/"+id)
  }

  public getStock(id : number): Observable<Array<any>>{

    return this.http.get<Array<any>>(
      'http://localhost:8081/api/v1' +
        id
    );
  }


}
