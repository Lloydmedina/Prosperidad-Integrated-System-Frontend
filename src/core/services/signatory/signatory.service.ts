import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class SignatoryService {

    SERVER_ADDRESS: string = environment.apiUrl

    constructor(
      private http: HttpClient
    ) { }
  
    public getList(): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/signatory`);
    }
  
  
    public getById(id: string): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/signatory/` + id);
    }
  
    public getDept(): Observable<any>{
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/signatory/department`)
    }

    public getDropdown(): Observable<any>{
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/signatory/dropdown`)
    }
  
    
    public insert(data: any): Observable<any> {
      return this.http.post<any>(`${this.SERVER_ADDRESS}/admin/signatory`, data);
      
    }
    public update(id:string, data: any): Observable<any> {
      return this.http.put<any>(`${this.SERVER_ADDRESS}/admin/signatory/` + id, data);
      
    }
    
    public delete(id: string): Observable<any> {
      return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/admin/signatory/` + id);
    }
}
