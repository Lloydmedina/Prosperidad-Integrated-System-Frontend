import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ContentNavigationComponent } from 'src/app/main-layout/template/content-navigation/content-navigation.component';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { PropertySetupService } from 'src/core/services/property-setup/property-setup.service';
export interface TreeNodeInterface {
  key: string;
  name: string;
  amt?: number;
  level?: number;
  tenant?: string;
  contact?: string;
  address?: string;
  property_status: string;
  expand?: boolean;
  area?: string;
  children?: TreeNodeInterface[];
  parent?: TreeNodeInterface;
}
@Component({
  selector: 'app-property-setup-list',
  templateUrl: './property-setup-list.component.html',
  styleUrls: ['./property-setup-list.component.css']
})
export class PropertySetupListComponent implements OnInit {

  listOfData: TreeNodeInterface[] = [];
  fcList: any[] = [];
  filteredOptions: any = [];
  suggestions: any = []
  control = {
    edit: false,
    delete: false
  }

  constructor(
    private router: Router,
    private modal: NzModalService,
    private propService: PropertySetupService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService
  ) { }
  isLoading = true
  formSetting: any = []
  mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};
  ngOnInit() {
    this.control = this.checkPriv.checkPrivilege("/main/economic-enterprises/market/property-setup")
    
    this.propService.getList(0).subscribe(value => {
      this.listOfData = value[0]
      this.listOfData.forEach(item => {
        this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
      });
      
      this.fcList = this.listOfData
      this.formSetting = value[1]
      this.suggestions = value[2]
      this.isLoading = false
      console.log("asd", this.suggestions)
    })
  }

  edit(data:any){
    console.log(data)
    this.router.navigate(["/main/economic-enterprises/market/property-setup/edit-form/", data.key])
  }
  print(data:any){
    this.router.navigate(["/main/economic-enterprises/market/property-setup/print/", data.key])
  }

  // delete(data:any){
  //    this.modal.confirm({
  //     nzTitle: 'Do you want to delete this record?',
  //     nzOnOk: () => 
  //     {
  //       this.propService.delete(data.key).subscribe(async x => {
  //         this.ngOnInit()
  //         await this.notification.create(
  //           "success",
  //           'Successfully Deleted',
  //           'Fees Charges Record has successfully deleted.'
  //         );
  //       },
  //       async error => {
  //        await this.notification.create(
  //           "error",
  //           'Unsuccessfully Saved',
  //           'Fees Charges Officials has not been deleted.'
  //         );
  //       })
  //     }
  //   });
  // }

  remarks: any = ""
  deleteModal = false
  deleteData: any = {}
  delete(data:any){

    console.log("Dlete", data)
    this.deleteData = data
    this.deleteModal = true;
  }

  handleCancel(){
    this.remarks = ""
    this.deleteModal = false
  }

  handleOk(){
    this.propService.delete(this.deleteData.key, this.remarks).subscribe(async x => {
      this.deleteModal = false
      this.ngOnInit()
      await this.notification.create(
        "success",
        'Successfully Deleted',
        'Property Setup Record has successfully deleted.'
      );
    },
    async error => {
     await this.notification.create(
        "error",
        'Unsuccessfully Saved',
        'Property Setup Record has not been deleted.'
      );
    })
  }

  statusSwitch = false;
  status_id: any;

  statusFilter(){
    localStorage.removeItem("property_status")
    if(this.statusSwitch){
      this.status_id = 1
    }else{
      this.status_id = 0
    }
    localStorage.setItem("property_status", this.status_id.toString());
    this.applyFilter();
  }

  localStorageStatus: any;
  applyFilter(){
    // this.localStorageStatus = localStorage.getItem("property_status")
    this.isLoading = true
    this.propService.getList(this.status_id).subscribe(data => {
      this.isLoading = false
      this.listOfData = data[0]
      this.fcList = this.listOfData
    })
  }

  
beginSearch(value:any){
  this.filteredOptions = this.suggestions.filter((option:any) => option.val.toLowerCase().indexOf(value.toLowerCase()) !== -1);
}
triggerSearch(value:any){
  // this.listOfData = this.fcList.filter((obj:any) => obj.fees_name.toLowerCase() == value.toLowerCase());
  if(value.tag == 'pn'){
    this.listOfData = this.fcList.filter((obj:any) => obj.name.toLowerCase() == value.val.toLowerCase());
  }

  if(this.listOfData.length == 0){
    this.notification.create(
      "error",
      'No Record Found!',
      ''
    )
  }
}
searchModel: any = ""
clearSearch(){
  this.searchModel = ""
  this.statusFilter()
  this.isLoading = true
  this.propService.getList(this.status_id).subscribe((value:any) => {
    this.isLoading = false
    this.listOfData = value[0]
    this.fcList = this.listOfData
    this.suggestions = value[2]
  })
}


collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
  if (!$event) {
    if (data.children) {
      data.children.forEach(d => {
        const target = array.find(a => a.key === d.key)!;
        target.expand = false;
        this.collapse(array, target, true);
      });
    } else {
      return;
    }
  }
}

convertTreeToList(root: TreeNodeInterface): TreeNodeInterface[] {
  const stack: TreeNodeInterface[] = [];
  const array: TreeNodeInterface[] = [];
  const hashMap = {};
  stack.push({ ...root, level: 0, expand: true });

  while (stack.length !== 0) {
    const node = stack.pop()!;
    this.visitNode(node, hashMap, array);
    if (node.children) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push({ ...node.children[i], level: node.level! + 1, expand: true, parent: node });
      }
    }
  }

  return array;
}

visitNode(node: TreeNodeInterface, hashMap: { [key: string]: boolean }, array: TreeNodeInterface[]): void {
  if (!hashMap[node.key]) {
    hashMap[node.key] = true;
    array.push(node);
  }
}


}
