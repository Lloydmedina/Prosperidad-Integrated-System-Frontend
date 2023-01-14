import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  SERVER_ADDRESS: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }
  
  public getList(status_id: number, reg_status: number): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/business?status_id=` + status_id + "&reg_status="+ reg_status);
  }

  public getBsusinessEntity(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/business/get_business_entity`);
  }

  public getHistory(id:any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/business/history?ID=` + id);
  }
  
  public getById(id: string): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/business/` + id);
  }
  
  public getPerson(): Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/person`);
  }
  
  public insert(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/admin/business`, data);
    
  }
  public update(id:string, data: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_ADDRESS}/admin/business/` + id, data);
    
  }
  
  public delete(id: string): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/admin/business/` + id);
  }
  

}
