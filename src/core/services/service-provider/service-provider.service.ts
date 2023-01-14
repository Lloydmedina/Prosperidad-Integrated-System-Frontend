import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

    SERVER_ADDRESS: string = environment.apiUrl

    constructor(private http: HttpClient) { }
  
    public getServiceProvider(): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/service_provider`);
    }
  
    public getServiceProviderEdit(GUID: any): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/service_provider/` + GUID);
    }
  
    public getServiceProviderDetails(GUID: any): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/service_provider/service_provider_details/` + GUID);
    }
  
    public getHistoryLogs(GUID: any): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/service_provider/history_logs/` + GUID);
    }
  
    public getEducationalType(): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/service_provider/get_educational_type`);
    }
  
    public saveServiceProvider(data: any): Observable<any> {
      return this.http.post<any[]>(`${this.SERVER_ADDRESS}/social_welfare/service_provider`, data);
    }
  
    public updateServiceProvider(guid: any, data: any): Observable<any> {
      return this.http.put<any[]>(`${this.SERVER_ADDRESS}/social_welfare/service_provider/`+ guid, data);
    }
  
    public deleteServiceProvider(guid: any): Observable<any> {
      return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/social_welfare/service_provider/`+ guid);
    }

}
