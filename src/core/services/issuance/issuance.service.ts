import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IssuanceService {

  SERVER_ADDRESS: string = environment.apiUrl
    
  constructor(private http: HttpClient) { }
  
  public getIssuance(status_id: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/issuance`);
  }

  public getIssuanceEdit(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/issuance/` + GUID);
  }

  public saveIssuance(data: any): Observable<any> {
    return this.http.post<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/issuance`, data);
  }

  public updateIssuance(guid: any, data: any): Observable<any> {
    return this.http.put<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/issuance/`+ guid, data);
  }

  public deleteIssuance(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/issuance/`+ guid);
  }

}
