import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DafacService {

  SERVER_ADDRESS: string = environment.apiUrl
    
  constructor(private http: HttpClient) { }
  
  public getDafac(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/dafac`);
  }

  public getAllDafac(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/dafac/get_all_list`);
  }

  public getDafacEdit(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/dafac/` + GUID);
  }

  public getDafacDeletedOnly(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/dafac/get_deleted_list`);
  }

  public getDafacGenerated(filter_type_status_id: number, status_id: number, status_deleted_id: number, this_month: any, this_year: any, monthly: any, monthlyYear: any, year_quarterly: string, quarter: number, yearly: any, from: any, to: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/dafac/get_list_generated?filter_type_status_id=`+ filter_type_status_id + "&status_id=" + status_id + "&status_deleted_id=" + status_deleted_id+ "&this_month=" + this_month + "&this_year=" + this_year + "&monthly=" + monthly + "&monthlyYear=" + monthlyYear + "&year_quarterly=" + year_quarterly + "&quarter=" + quarter + "&yearly=" + yearly + "&from=" + from + "&to=" + to );
  }

  public getGeneralDafacDetails(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/dafac/dafac_details/` + GUID);
  }

  public getHistoryLogs(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/dafac/history_logs/` + GUID);
  }

  public getEducationalType(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/dafac/get_educational_type`);
  }

  public saveDafac(data: any): Observable<any> {
    return this.http.post<any[]>(`${this.SERVER_ADDRESS}/social_welfare/dafac`, data);
  }

  public updateDafac(guid: any, data: any): Observable<any> {
    return this.http.put<any[]>(`${this.SERVER_ADDRESS}/social_welfare/dafac/`+ guid, data);
  }

  public deleteDafac(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/social_welfare/dafac/`+ guid);
  }

}
