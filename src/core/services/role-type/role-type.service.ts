import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleTypeService {
  SERVER_ADDRESS: string = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

public getList(): Observable<any> {
  return this.http.get<any[]>(`${this.SERVER_ADDRESS}/roletype`);
}


public getById(id: string): Observable<any> {
  return this.http.get<any[]>(`${this.SERVER_ADDRESS}/roletype/` + id);
}

public getDomain(): Observable<any>{
  return this.http.get<any[]>(`${this.SERVER_ADDRESS}/roletype/domain`)
}

public getActivity(domain_id:string): Observable<any>{
  return this.http.get<any[]>(`${this.SERVER_ADDRESS}/roletype/activity/` + domain_id)
}

public insert(data: any): Observable<any> {
  return this.http.post<any>(`${this.SERVER_ADDRESS}/roletype`, data);
  
}
public update(id:string, data: any): Observable<any> {
  return this.http.put<any>(`${this.SERVER_ADDRESS}/roletype/` + id, data);
  
}

public delete(id: string): Observable<any> {
  return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/roletype/` + id);
}
}
