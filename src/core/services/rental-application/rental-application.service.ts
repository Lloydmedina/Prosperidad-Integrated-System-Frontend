import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RentalApplicationService {
  SERVER_ADDRESS: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }
  
  public getList(stat:any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/rental-application?status_id=` + stat);
  }

  // public getList(stat:any, type:any): Observable<any> {
  //   return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/rental-application?status_id=` + stat + `&type=` + type);
  // }

  public getPrintList(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/rental-application/print-list`);
  }

  public getDropdown(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/rental-application/get-types`);
  }

  public getReqs(type:any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/rental-application/requirements/` + Number(type));
  }
    
  public getById(id: string): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/rental-application/` + id);
  }

  public insert(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/market/rental-application`, data);
    
  }

  public update(id:string, data: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_ADDRESS}/market/rental-application/` + id, data);
    
  }

  public getMayor(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/form-config/mayor`);
  }
  
  public delete(id: string, remarks:string): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/market/rental-application/` + id + `?remarks=` + remarks);
  }

  public getTransientList(date:any): Observable<any> {
    console.log(date)
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/rental-application/transient?dte=` + date);
  }  
  public getStallList(date:any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/rental-application/stall?dte=` + date);
  }
}
