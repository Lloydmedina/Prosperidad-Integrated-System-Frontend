import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WccService {

  SERVER_ADDRESS : string = environment.apiUrl

  constructor(
    private http : HttpClient
  ){}
  //WCC REGISTRATION ---------------------------------
    //wcc registration list
  public getList() : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/registration`);
  }
  //get FCID
  public getFCid(pid : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/registration/get-fcid/`+pid);
  }
   //get FC head details
   public getFCHeadDetails(pid : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/registration/get-family-head/`+pid);
  }

  //get FC list
  public getFClist(pid : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/registration/get-family-list/`+pid);
  }
   //get registration data
   public getRegistrationData(pid : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/registration/get-data/`+pid);
  }
  //get referrer data
  public getReferrerData(pid : any) : Observable<any>{
    return this.http.get<any[]>(`${this.SERVER_ADDRESS}/social_welfare/wcc/registration/get-referrer/`+pid);
  }

  //save registration
  public saveNewRegistration(data: any): Observable<any> {
    return this.http.post<any>(`${this.SERVER_ADDRESS}/social_welfare/wcc/registration/add-new-wccadmission`,data);
  }
  //update registration
  public updateData(id :string, data: any): Observable<any> {
    return this.http.put<any>(`${this.SERVER_ADDRESS}/social_welfare/wcc/registration/update-wcccadmission/`+id ,data);
  }
  //-------------------------------------------------
}
