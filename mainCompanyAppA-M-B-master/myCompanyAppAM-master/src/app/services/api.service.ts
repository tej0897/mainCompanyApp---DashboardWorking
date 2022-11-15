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
    return this.http.post('https://f991syn2dg.execute-api.us-west-2.amazonaws.com/CompanyAppDeployment/mycompanyappresource', companyData);
  }

  public getAllCompany():Observable<Array<Company>>{
    return this.http.get<Array<Company>>('https://f991syn2dg.execute-api.us-west-2.amazonaws.com/CompanyAppDeployment/mycompanyappresource');
  }

  public putCompany(data: any, id : number){
    return this.http.put<any>("https://f991syn2dg.execute-api.us-west-2.amazonaws.com/CompanyAppDeployment/"+id, data);
  }

  public deleteCompany(id: number){
    return this.http.delete<any>("https://f991syn2dg.execute-api.us-west-2.amazonaws.com/CompanyAppDeployment/"+id)
  }

  public getStock(id : number): Observable<Array<any>>{

    return this.http.get<Array<any>>(
      'https://f991syn2dg.execute-api.us-west-2.amazonaws.com/CompanyAppDeployment/stocks/' +
        id
    );
  }
}
