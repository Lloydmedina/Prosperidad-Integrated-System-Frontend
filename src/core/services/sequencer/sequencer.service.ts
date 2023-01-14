import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class SequencerService {

    SERVER_ADDRESS: string = environment.apiUrl

    constructor(private http: HttpClient) { }
  
    public getFormLists(id:any): Observable<any> {
      return this.http.get<any[]>(`${this.SERVER_ADDRESS}/admin/sequencer/` + id);
    }
  
  
    public saveSequence(data:any): Observable<any> {
        return this.http.post<any[]>(`${this.SERVER_ADDRESS}/admin/sequencer`, data);
      }

}
