import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TenantProfilingService {
    SERVER_ADDRESS: string = environment.apiUrl

    constructor(
      private http: HttpClient
    ) { }
    
    public getList(status_id: any): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/tenant-profiling?status_id=` + status_id);
    }
  
    
    public getPrintList(): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/tenant-profiling/print-list`);
    }
    public getDropdown(): Observable<any> {
        return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/tenant-profiling/dropdown`);
      }
      
    public getById(id: string): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/tenant-profiling/` + id);
    }

    public insert(data: any): Observable<any> {
      return this.http.post<any>(`${this.SERVER_ADDRESS}/market/tenant-profiling`, data);
      
    }
    public update(id:string, data: any): Observable<any> {
      return this.http.put<any>(`${this.SERVER_ADDRESS}/market/tenant-profiling/` + id, data);
      
    }
    
    public delete(id: string, remarks:string): Observable<any> {
      return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/market/tenant-profiling/` + id + `?remarks=` + remarks);
    }

    public getBrgy(brgy_id: any): Observable<any> {
        return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/tenant-profiling/lgu-details?brgy_id=` + brgy_id);
      }
    
}
