import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AicsIntakeService {

  SERVER_ADDRESS: string = environment.apiUrl
    
  constructor(private http: HttpClient) { }
  
  public getAicsIntake(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/aics_intake`);
  }

  public getAllAicsIntake(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/aics_intake/get_all_list`);
  }

  public getAicsIntakeEdit(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/aics_intake/` + GUID);
  }

  public getAicsIntakeDeletedOnly(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/aics_intake/get_deleted_list`);
  }

  public getAicsIntakeGenerated(filter_type_status_id: number, status_id: number, status_deleted_id: number, this_month: any, this_year: any, monthly: any, monthlyYear: any, year_quarterly: string, quarter: number, yearly: any, from: any, to: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/aics_intake/get_list_generated?filter_type_status_id=`+ filter_type_status_id + "&status_id=" + status_id + "&status_deleted_id=" + status_deleted_id+ "&this_month=" + this_month + "&this_year=" + this_year + "&monthly=" + monthly + "&monthlyYear=" + monthlyYear + "&year_quarterly=" + year_quarterly + "&quarter=" + quarter + "&yearly=" + yearly + "&from=" + from + "&to=" + to );
  }

  public getAicsIntakeDetails(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/aics_intake/aics_intake_details/` + GUID);
  }

  public getAddPerson(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/aics_intake/get_person_add/` + GUID);
  }

  public getHistoryLogs(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/aics_intake/history_logs/` + GUID);
  }

  public getEducationalType(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/aics_intake/get_educational_type`);
  }

  public saveAicsIntake(data: any): Observable<any> {
    return this.http.post<any[]>(`${this.SERVER_ADDRESS}/social_welfare/aics_intake`, data);
  }

  public updateAicsIntake(guid: any, data: any): Observable<any> {
    return this.http.put<any[]>(`${this.SERVER_ADDRESS}/social_welfare/aics_intake/`+ guid, data);
  }

  public deleteAicsIntake(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/social_welfare/aics_intake/`+ guid);
  }

}
