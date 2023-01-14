import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DaycareCenterService {

    SERVER_ADDRESS: string = environment.apiUrl

    constructor(private http: HttpClient) { }
  
    public getDaycareCenter(): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/daycare_center`);
    }
  
    public getDaycareCenterEdit(GUID: any): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/daycare_center/` + GUID);
    }
  
    public getDaycareCenterDetails(GUID: any): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/daycare_center/daycare_center_details/` + GUID);
    }
  
    public getHistoryLogs(GUID: any): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/daycare_center/history_logs/` + GUID);
    }
  
    public getEducationalType(): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/daycare_center/get_educational_type`);
    }
  
    public saveDaycareCenter(data: any): Observable<any> {
      return this.http.post<any[]>(`${this.SERVER_ADDRESS}/social_welfare/daycare_center`, data);
    }
  
    public updateDaycareCenter(guid: any, data: any): Observable<any> {
      return this.http.put<any[]>(`${this.SERVER_ADDRESS}/social_welfare/daycare_center/`+ guid, data);
    }
  
    public deleteDaycareCenter(guid: any): Observable<any> {
      return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/social_welfare/daycare_center/`+ guid);
    }

}
