import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  SERVER_ADDRESS: string = environment.apiUrl
    
  constructor(private http: HttpClient) { }
  
  public getBilling(status_id: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/billing`);
  }

  public getBillingEdit(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/billing/` + GUID);
  }

  public saveBilling(data: any): Observable<any> {
    return this.http.post<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/billing`, data);
  }

  public updateBilling(guid: any, data: any): Observable<any> {
    return this.http.put<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/billing/`+ guid, data);
  }

  public deleteBilling(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/billing/`+ guid);
  }

}
