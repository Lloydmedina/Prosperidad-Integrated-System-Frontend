import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndigentIntakeService {

  SERVER_ADDRESS: string = environment.apiUrl
    
  constructor(private http: HttpClient) { }
  
  public getIndigentIntake(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/indigent_intake`);
  }

  public getAllIndigentIntake(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/indigent_intake/get_all_list`);
  }

  public getIndigentIntakeEdit(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/indigent_intake/` + GUID);
  }

  public getIndigentIntakeDetails(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/indigent_intake/indigent_intake_details/` + GUID);
  }

  public getHistoryLogs(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/indigent_intake/history_logs/` + GUID);
  }

  public saveIndigentIntake(data: any): Observable<any> {
    return this.http.post<any[]>(`${this.SERVER_ADDRESS}/social_welfare/indigent_intake`, data);
  }

  public updateIndigentIntake(guid: any, data: any): Observable<any> {
    return this.http.put<any[]>(`${this.SERVER_ADDRESS}/social_welfare/indigent_intake/`+ guid, data);
  }

  public deleteIndigentIntake(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/social_welfare/indigent_intake/`+ guid);
  }

}
