import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvacuationCenterService {

  SERVER_ADDRESS: string = environment.apiUrl

  constructor(private http: HttpClient) { }

  public getEvacuationCenter(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin_console/evacuation_center`);
  }

  public getAllEvacuationCenter(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin_console/evacuation_center/get_all_list`);
  }

  public getEvacuationCenterDeletedOnly(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin_console/evacuation_center/get_deleted_list`);
  }

  public getEvacuationCenterGenerated(filter_type_status_id: number, status_id: number, status_deleted_id: number, this_month: any, this_year: any, monthly: any, monthlyYear: any, year_quarterly: string, quarter: number, yearly: any, from: any, to: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin_console/evacuation_center/get_list_generated?filter_type_status_id=`+ filter_type_status_id + "&status_id=" + status_id + "&status_deleted_id=" + status_deleted_id+ "&this_month=" + this_month + "&this_year=" + this_year + "&monthly=" + monthly + "&monthlyYear=" + monthlyYear + "&year_quarterly=" + year_quarterly + "&quarter=" + quarter + "&yearly=" + yearly + "&from=" + from + "&to=" + to );
  }

  public getRegion(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin_console/evacuation_center/get_region`);
  }

  public getEvacuationCenterEdit(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin_console/evacuation_center/` + GUID);
  }

  public saveEvacuationCenter(data: any): Observable<any> {
    return this.http.post<any[]>(`${this.SERVER_ADDRESS}/admin_console/evacuation_center`, data);
  }

  public updateEvacuationCenter(guid: any, data: any): Observable<any> {
    return this.http.put<any[]>(`${this.SERVER_ADDRESS}/admin_console/evacuation_center/`+ guid, data);
  }

  public deleteEvacuationCenter(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/admin_console/evacuation_center/`+ guid);
  }

}
