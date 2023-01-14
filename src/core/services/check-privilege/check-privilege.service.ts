import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckPrivilegeService {

constructor() { }
control = {
  edit: true,
  delete: true,
  add: true,
  list: true,
  print: false
}

public checkPrivilege(URL:string){

    var editString = URL + "/edit-form"
    var deleteString = URL + "/delete"
    var arrayItems = JSON.parse(localStorage.getItem('auth-user') || '{}');


    var aa = arrayItems[4].routes.filter((x:any) => x == editString)
    if (aa.length > 0) {
      this.control.edit = false;
    }


    var bb = arrayItems[4].routes.filter((x:any) => x == deleteString)
    if (bb.length > 0) {
      this.control.delete = false;
    }

    // var cc = arrayItems[4].routes.filter((x:any) => x == addString)
    // if (cc.length > 0) {
    //   this.control.add = false;
    // }

    // var dd = arrayItems[4].routes.filter((x:any) => x == listString)
    // if (dd.length > 0) {
    //   this.control.list = false;
    // }

    return this.control
  }

  public printOption(val:any){
    localStorage.removeItem("printOption")
    localStorage.setItem("printOption", val);
  }
}
