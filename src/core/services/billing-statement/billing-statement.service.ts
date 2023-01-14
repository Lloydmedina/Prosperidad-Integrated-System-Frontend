import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillingStatementService {

  SERVER_ADDRESS: string = environment.apiUrl
    
  constructor(private http: HttpClient) { }
  
  public getBillingStatement(status_id: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/billing_statement`);
  }

  public getBillingStatementEdit(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/billing_statement/` + GUID);
  }

  public saveBillingStatement(data: any): Observable<any> {
    return this.http.post<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/billing_statement`, data);
  }

  public updateBillingStatement(guid: any, data: any): Observable<any> {
    return this.http.put<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/billing_statement/`+ guid, data);
  }

  public deleteBillingStatement(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/billing_statement/`+ guid);
  }

}
