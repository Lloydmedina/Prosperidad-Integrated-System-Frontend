import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  SERVER_ADDRESS: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  public getDomainList(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/domain`);
  }


  public getById(id: string): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/domain/` + id);
  }

  public getProject(): Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/domain/project`)
  }

  
  public insert(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/domain`, data);
    
  }
  public update(id:string, data: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_ADDRESS}/domain/` + id, data);
    
  }
  
  public delete(id: string): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/domain/` + id);
  }

}
