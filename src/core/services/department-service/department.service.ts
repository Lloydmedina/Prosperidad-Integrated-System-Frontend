import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    
  providedIn: 'root'
})
export class DepartmentService {

SERVER_ADDRESS: string = environment.apiUrl

constructor(
  private http: HttpClient
) { }

public getList(): Observable<any> {
  return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/department`);
}
  


public getById(id: string): Observable<any> {
  return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/department/` + id);
}
public getPrefix(id: string): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/department/prefix?id=` + id);
  }
  

public getPrint(id: string): Observable<any> {
  return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/department/print/` + id);
}

public getEmployees(): Observable<any>{
  return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/department/employees`)
}

public insert(data: any): Observable<any> {
  return this.http.post<any>(`${this.SERVER_ADDRESS}/admin/department`, data);
  
}
public update(id:string, data: any): Observable<any> {
  return this.http.put<any>(`${this.SERVER_ADDRESS}/admin/department/` + id, data);
  
}

public delete(id: string): Observable<any> {
  return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/admin/department/` + id);
}

}
