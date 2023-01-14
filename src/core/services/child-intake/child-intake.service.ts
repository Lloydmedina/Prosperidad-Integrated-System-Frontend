import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChildIntakeService {

  SERVER_ADDRESS: string = environment.apiUrl

  constructor(private http: HttpClient) { }
  
  public getChildIntake(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/child_intake`);
  }

  public getAllChildIntake(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/child_intake/get_all_list`);
  }

  public getChildIntakeEdit(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/child_intake/` + GUID);
  }

  public getChildIntakeDetails(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/child_intake/child_intake_details/` + GUID);
  }

  public getEducationalType(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/child_intake/get_educational_type`);
  }

  public getHistoryLogs(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/child_intake/history_logs/` + GUID);
  }

  public getAddPerson(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/child_intake/get_person_add/` + GUID);
  }

  public saveChildIntake(data: any): Observable<any> {
    return this.http.post<any[]>(`${this.SERVER_ADDRESS}/social_welfare/child_intake`, data);
  }

  public updateChildIntake(guid: any, data: any): Observable<any> {
    return this.http.put<any[]>(`${this.SERVER_ADDRESS}/social_welfare/child_intake/`+ guid, data);
  }

  public deleteChildIntake(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/social_welfare/child_intake/`+ guid);
  }

}
