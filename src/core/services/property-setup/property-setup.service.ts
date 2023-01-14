import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertySetupService {
  
  SERVER_ADDRESS: string = environment.apiUrl

    constructor(
      private http: HttpClient
    ) { }
    
    public getList(status_id: any): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/property-setup?status_id=` + status_id);
    }
    
    public getDropdown(): Observable<any> {
        return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/property-setup/dropdown`);
      }
      
    public getById(id: string): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/market/property-setup/` + id);
    }

    public insert(data: any): Observable<any> {
      return this.http.post<any>(`${this.SERVER_ADDRESS}/market/property-setup`, data);
      
    }
    public update(id:string, data: any): Observable<any> {
      return this.http.put<any>(`${this.SERVER_ADDRESS}/market/property-setup/` + id, data);
      
    }
    
    public delete(id: string, remarks:string): Observable<any> {
      return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/market/property-setup/` + id + `?remarks=` + remarks);
    }


  
}
