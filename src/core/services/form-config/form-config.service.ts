import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FormConfigService {
    SERVER_ADDRESS: string = environment.apiUrl

    itemValue = new BehaviorSubject(this.dateFilter);
    constructor(
      private http: HttpClient
    ) { }
    

    public getFormConfig(path: any): Observable<any> {
        return this.http.get<any[]>(`${this.SERVER_ADDRESS}/form-config?path=` + path);
      }

      set dateFilter(value:any) {
        this.itemValue.next(value); // this will make sure to tell every subscriber about the change.
        localStorage.setItem('dateFilter', value);
      }

      get dateFilter() {
        return localStorage.getItem('dateFilter');
      }
}
