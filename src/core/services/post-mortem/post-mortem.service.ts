import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostMortemService {

  SERVER_ADDRESS: string = environment.apiUrl
    
  constructor(private http: HttpClient) { }
  
  public getPostMortem(status_id: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/post_mortem`);
  }

  public getPostMortemEdit(GUID: any): Observable<any> {
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/post_mortem/` + GUID);
  }

  public savePostMortem(data: any): Observable<any> {
    return this.http.post<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/post_mortem`, data);
  }

  public updatePostMortem(guid: any, data: any): Observable<any> {
    return this.http.put<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/post_mortem/`+ guid, data);
  }

  public deletePostMortem(guid: any): Observable<any> {
    return this.http.delete<any[]>(`${this.SERVER_ADDRESS}/slaughterhouse/post_mortem/`+ guid);
  }

}
