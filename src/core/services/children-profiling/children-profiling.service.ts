import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChildrenProfilingService {

  SERVER_ADDRESS: string = environment.apiUrl

  constructor(private http: HttpClient) { }

  public getChildrenProfiling(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/profiling`);
  }

  public getChildrenProfilingEdit(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/profiling/` + GUID);
  }

  public getChildrenProfilingDetails(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/profiling/profiling_details/` + GUID);
  }

  public getHistoryLogs(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/profiling/history_logs/` + GUID);
  }

  public getEducationalType(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/profiling/get_educational_type`);
  }

  public saveChildrenProfiling(data: any): Observable<any> {
    return this.http.post<any[]>(`${this.SERVER_ADDRESS}/social_welfare/profiling`, data);
  }

  public updateChildrenProfiling(guid: any, data: any): Observable<any> {
    return this.http.put<any[]>(`${this.SERVER_ADDRESS}/social_welfare/profiling/`+ guid, data);
  }

  public deleteChildrenProfiling(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/social_welfare/profiling/`+ guid);
  }

}
