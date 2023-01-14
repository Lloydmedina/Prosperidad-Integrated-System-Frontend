import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    
    providedIn: 'root'
  })
export class BarangayOfficialService {

    SERVER_ADDRESS: string = environment.apiUrl

    constructor(
      private http: HttpClient
    ) { }
    
    public getList(): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/barangay-official`);
    }
      
    
    
    public getById(id: string): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/barangay-official/` + id);
    }
      
    
    public getPrint(id: string): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/barangay-official/print/` + id);
    }
    
    public getEmployees(): Observable<any>{
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/barangay-official/employees`)
    }
    
    public insert(data: any): Observable<any> {
      return this.http.post<any>(`${this.SERVER_ADDRESS}/admin/barangay-official`, data);
      
    }
    public update(id:string, data: any): Observable<any> {
      return this.http.put<any>(`${this.SERVER_ADDRESS}/admin/barangay-official/` + id, data);
      
    }
    
    public delete(id: string): Observable<any> {
      return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/admin/barangay-official/` + id);
    }
    
}
