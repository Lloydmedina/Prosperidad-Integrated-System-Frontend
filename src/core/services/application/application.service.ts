import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  SERVER_ADDRESS: string = environment.apiUrl

  constructor(private http: HttpClient) { }

  public getList(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/form`);
  }
  public getFilters(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/form/filters`);
  }
  public getActionType(): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/form/action-type`);
  }




  public getById(id: string): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/form/` + id);
  }

  public getDomainFolders(id:string): Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/form/folders/` + id)
  }
  
  public insert(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/form`, data);
    
  }
  public update(id:string, data: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_ADDRESS}/form/` + id, data);
    
  }
  
  public delete(id: string): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/form/` + id);
  }
 
  handleError(error: HttpErrorResponse){
    alert("Server is shutdown - " + error.message)
    return throwError(error);
  }
}

