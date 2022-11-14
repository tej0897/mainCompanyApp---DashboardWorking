import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private http:HttpClient) { }
  API = 'http://localhost:8081/api/v1';

  

  public addCompany(companyData: any) {
    return this.http.post(this.API + '/addCompany', companyData);
  }

  public getAllCompany():Observable<Array<Company>>{
    return this.http.get<Array<Company>>(this.API + '/getAllCompanies');
  }

  public deleteCompany(cid: number): Observable<Company>{
    return this.http.delete<Company>(this.API + /deleteCompany/ +cid);
  }

  public getCompanyByID(cid:number):Observable<Company>{
    return this.http.get<Company>(this.API + /getCompanyByID/ +cid);
  }

  public updateCompany(company: any) {
    return this.http.put(this.API + '/updateCompany', company);
  }
}
