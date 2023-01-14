import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OscaRegistrationService {

  SERVER_ADDRESS: string = environment.apiUrl
    
  constructor(private http: HttpClient) { }
  
  public getOscaRegistration(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/osca_registration`);
  }

  public getAllOscaRegistration(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/osca_registration/get_all_list`);
  }

  public getEmploymentStatus(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/osca_registration/get_employment_status`);
  }

  public getOscaRegistrationDeletedOnly(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/osca_registration/get_deleted_list`);
  }

  public getOscaRegistrationGenerated(filter_type_status_id: number, status_id: number, status_deleted_id: number, this_month: any, this_year: any, monthly: any, monthlyYear: any, year_quarterly: string, quarter: number, yearly: any, from: any, to: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/osca_registration/get_list_generated?filter_type_status_id=`+ filter_type_status_id + "&status_id=" + status_id + "&status_deleted_id=" + status_deleted_id+ "&this_month=" + this_month + "&this_year=" + this_year + "&monthly=" + monthly + "&monthlyYear=" + monthlyYear + "&year_quarterly=" + year_quarterly + "&quarter=" + quarter + "&yearly=" + yearly + "&from=" + from + "&to=" + to );
  }

  public getEducationalType(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/osca_registration/get_educational_type`);
  }

  public getLivingArrangement(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/osca_registration/get_living_arrangement`);
  }

  public getClassification(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/osca_registration/get_classification`);
  }

  public getPHMembership(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/osca_registration/get_ph_membership`);
  }

  public getOscaRegistrationEdit(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/osca_registration/` + GUID);
  }

  public getOscaRegistrationDetails(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/osca_registration/osca_registration_details/` + GUID);
  }

  public getHistoryLogs(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/osca_registration/history_logs/` + GUID);
  }

  public saveOscaRegistration(data: any): Observable<any> {
    return this.http.post<any[]>(`${this.SERVER_ADDRESS}/social_welfare/osca_registration`, data);
  }

  public updateOscaRegistration(guid: any, data: any): Observable<any> {
    return this.http.put<any[]>(`${this.SERVER_ADDRESS}/social_welfare/osca_registration/`+ guid, data);
  }

  public deleteOscaRegistration(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/social_welfare/osca_registration/`+ guid);
  }

}
