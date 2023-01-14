import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EccdFacilityService {

    SERVER_ADDRESS: string = environment.apiUrl

    constructor(private http: HttpClient) { }
  
    public getEccdFacility(): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/eccd_facility`);
    }
  
    public getEccdFacilityEdit(GUID: any): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/eccd_facility/` + GUID);
    }
  
    public getEccdFacilityDetails(GUID: any): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/eccd_facility/eccd_facility_details/` + GUID);
    }
  
    public getHistoryLogs(GUID: any): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/eccd_facility/history_logs/` + GUID);
    }
  
    public getEducationalType(): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/eccd_facility/get_educational_type`);
    }
  
    public saveEccdFacility(data: any): Observable<any> {
      return this.http.post<any[]>(`${this.SERVER_ADDRESS}/social_welfare/eccd_facility`, data);
    }
  
    public updateEccdFacility(guid: any, data: any): Observable<any> {
      return this.http.put<any[]>(`${this.SERVER_ADDRESS}/social_welfare/eccd_facility/`+ guid, data);
    }
  
    public deleteEccdFacility(guid: any): Observable<any> {
      return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/social_welfare/eccd_facility/`+ guid);
    }

}
