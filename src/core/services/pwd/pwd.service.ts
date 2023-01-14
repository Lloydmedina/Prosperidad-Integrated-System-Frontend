import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PwdService {

  SERVER_ADDRESS: string = environment.apiUrl
    
  constructor(private http: HttpClient) { }
  
  public getPwd(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/pwd`);
  }

  public getAllPwd(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/pwd/get_all_list`);
  }

  public getPwdEdit(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/pwd/` + GUID);
  }

  public getPwdDeletedOnly(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/pwd/get_deleted_list`);
  }

  public getPwdGenerated(filter_type_status_id: number, status_id: number, status_deleted_id: number, this_month: any, this_year: any, monthly: any, monthlyYear: any, year_quarterly: string, quarter: number, yearly: any, from: any, to: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/pwd/get_list_generated?filter_type_status_id=`+ filter_type_status_id + "&status_id=" + status_id + "&status_deleted_id=" + status_deleted_id+ "&this_month=" + this_month + "&this_year=" + this_year + "&monthly=" + monthly + "&monthlyYear=" + monthlyYear + "&year_quarterly=" + year_quarterly + "&quarter=" + quarter + "&yearly=" + yearly + "&from=" + from + "&to=" + to );
  }

  public getPwdDetails(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/pwd/pwd_details/` + GUID);
  }

  public getHistoryLogs(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/pwd/history_logs/` + GUID);
  }

  public getEducationalType(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/pwd/get_educational_type`);
  }

  public getOccupationList(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/pwd/get_occupation_list`);
  }

  public getCauseOfDisability(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/pwd/get_cause_of_disability`);
  }

  public GetEmploymentStatus(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/pwd/get_employment_status`);
  }

  public GetEmploymentType(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/pwd/get_employment_type`);
  }

  public GetEmployerType(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/pwd/get_employer_type`);
  }

  public getDisability(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/pwd/get_disability`);
  }

  public savePwd(data: any): Observable<any> {
    return this.http.post<any[]>(`${this.SERVER_ADDRESS}/social_welfare/pwd`, data);
  }

  public updatePwd(guid: any, data: any): Observable<any> {
    return this.http.put<any[]>(`${this.SERVER_ADDRESS}/social_welfare/pwd/`+ guid, data);
  }

  public deletePwd(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/social_welfare/pwd/`+ guid);
  }

}
