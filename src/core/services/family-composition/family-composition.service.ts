import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FamilyCompositionService {

  SERVER_ADDRESS: string = environment.apiUrl

  constructor(private http: HttpClient) { }

  public getFamilyComposition(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/family_composition`);
  }

  public getAllFamilyComposition(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/family_composition/get_all_list`);
  }

  public getFamilyCompositionEdit(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/family_composition/` + GUID);
  }

  public getFamilyCompositionDeletedOnly(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/family_composition/get_deleted_list`);
  }

  public getFamilyCompositionGenerated(filter_type_status_id: number, status_id: number, status_deleted_id: number, this_month: any, this_year: any, monthly: any, monthlyYear: any, year_quarterly: string, quarter: number, yearly: any, from: any, to: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/family_composition/get_list_generated?filter_type_status_id=`+ filter_type_status_id + "&status_id=" + status_id + "&status_deleted_id=" + status_deleted_id+ "&this_month=" + this_month + "&this_year=" + this_year + "&monthly=" + monthly + "&monthlyYear=" + monthlyYear + "&year_quarterly=" + year_quarterly + "&quarter=" + quarter + "&yearly=" + yearly + "&from=" + from + "&to=" + to );
  }

  public getFamilyCompositionDetails(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/family_composition/family_head_details/` + GUID);
  }

  public getFamilyCompositionDetailsWithPersonGUID(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/family_composition/family_head_details_with_person_guid/` + GUID);
  }

  public getRegisteredFourps(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/family_composition/get_registered_fourps/`);
  }

  public getRegisteredIPS(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/family_composition/get_registered_ips/`);
  }

  public getHistoryLogs(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/family_composition/history_logs/` + GUID);
  }

  public getEducationalType(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/family_composition/get_educational_type`);
  }

  public saveFamilyComposition(data: any): Observable<any> {
    return this.http.post<any[]>(`${this.SERVER_ADDRESS}/social_welfare/family_composition`, data);
  }

  public updateFamilyComposition(guid: any, data: any): Observable<any> {
    return this.http.put<any[]>(`${this.SERVER_ADDRESS}/social_welfare/family_composition/`+ guid, data);
  }

  public deleteFamilyComposition(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/social_welfare/family_composition/`+ guid);
  }

  // public getCurrentServerTime(): Observable<any> {
  //   return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/family_composition/get_educational_type`);
  // }

}
