import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FeesChargesService {
    SERVER_ADDRESS: string = environment.apiUrl

    constructor(
      private http: HttpClient
    ) { }
    
    public getList(status_id: any): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/fees-charges?status_id=` + status_id);
    }
  
    
    public getDropdown(): Observable<any> {
        return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/fees-charges/dropdown`);
      }
      
    public getById(id: string): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/fees-charges/` + id);
    }

    public insert(data: any): Observable<any> {
      return this.http.post<any>(`${this.SERVER_ADDRESS}/admin/fees-charges`, data);
      
    }
    public update(id:string, data: any): Observable<any> {
      return this.http.put<any>(`${this.SERVER_ADDRESS}/admin/fees-charges/` + id, data);
      
    }
    
    public delete(id: string): Observable<any> {
      return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/admin/fees-charges/` + id);
    }

}
