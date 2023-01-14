import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  SERVER_ADDRESS: string = environment.apiUrl

  constructor(private http: HttpClient) { }

  public getList(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/user`);
  }

  public getDomainList(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/domain`);
  }


  public getById(id: string): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/user/` + id);
  }

  public getRoleDomain(id:string): Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/user/get-role/` + id)
  }

  
  public insert(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/user`, data);
    
  }
  public update(id: any, data: any): Observable<any> {
    console.log("chanak", id)
    return this.http.put<any>(`${this.SERVER_ADDRESS}/user/` + id, data);
    
  }
  
  public delete(id: string): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/user/` + id);
  }
 
  handleError(error: HttpErrorResponse){
    alert("Server is shutdown - " + error.message)
    return throwError(error);
  }

}
