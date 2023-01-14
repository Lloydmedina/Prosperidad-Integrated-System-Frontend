import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  SERVER_ADDRESS: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  public getPerson(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/person`);
  }

  public getPersonActiveOnly(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/person/get_active_list`);
  }

  public getPersonActiveAboveSixty(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/person/get_active_list_above_sixty`);
  }

  public getPersonDeletedOnly(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/person/get_deleted_list`);
  }

  public getPersonGenerated(filter_type_status_id: number, status_id: number, status_deleted_id: number, this_month: any, this_year: any, monthly: any, monthlyYear: any, year_quarterly: string, quarter: number, yearly: any, from: any, to: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/person/get_list_generated?filter_type_status_id=`+ filter_type_status_id + "&status_id=" + status_id + "&status_deleted_id=" + status_deleted_id+ "&this_month=" + this_month + "&this_year=" + this_year + "&monthly=" + monthly + "&monthlyYear=" + monthlyYear + "&year_quarterly=" + year_quarterly + "&quarter=" + quarter + "&yearly=" + yearly + "&from=" + from + "&to=" + to );
  }

  public getDropdownValues(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/person/dropdown_values`);
  }

  public getDropdownPrefix(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/person/dropdown_prefix`);
  }

  public getDropdownprovince(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/person/dropdown_province`);
  }

  public getDropdowncityMun(id: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/person/dropdown_city_mun/` + id);
  }

  public getBarangay(id: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/person/dropdown_barangay/` + id);
  }

  public getBloodType(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/person/blood_type`);
  }

  public getRegion(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/person/get_region`);
  }

  public getEducationalType(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/person/get_educational_type`);
  }

  public savePerson(data: any): Observable<any> {
    return this.http.post<any[]>(`${this.SERVER_ADDRESS}/admin/person`, data);
  }

  public saveImage(data: any): Observable<any> {
    return this.http.post<any[]>(`${this.SERVER_ADDRESS}/admin/person/image`, data);
  }

  public getPersonGUID(guid: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/person/` + guid);
  }

  public updatePerson(guid: any, data: any): Observable<any> {
    return this.http.put<any[]>(`${this.SERVER_ADDRESS}/admin/person/`+ guid, data);
  }

  public deletePerson(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/admin/person/`+ guid);
  }

  public activatePerson(guid: any, data: any): Observable<any> {
    return this.http.put<any[]>(`${this.SERVER_ADDRESS}/admin/person/activate/`+ guid, data);
  }

}