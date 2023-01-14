import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { MarketBillingService } from 'src/core/services/market-billing/market-billing.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PropertySetupService } from 'src/core/services/property-setup/property-setup.service';
export interface TreeNodeInterface {
  key: string;
  name: string;
  amt?: number;
  level?: number;
  tenant?: string;
  contact?: string;
  address?: string;
  expand?: boolean;
  area?: string;
  children?: TreeNodeInterface[];
  parent?: TreeNodeInterface;
}
@Component({
  selector: 'app-property-browser',
  templateUrl: './property-browser.component.html',
  styleUrls: ['./property-browser.component.css']
})
export class PropertyBrowserComponent implements OnInit {
  listOfData: TreeNodeInterface[] = [];
  fcList: any[] = [];
  filteredOptions: any = [];
  suggestions: any = []
  control = {
    edit: false,
    delete: false
  }
  loading: any;
  constructor(
    private router: Router,
    private modal: NzModalService,
    private modalRef: NzModalRef,
    private propService: PropertySetupService,
    private billingService: MarketBillingService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService,
    private pathService: PathsegmentService,
  ) { }
path:any;
isBilling=false;
  mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};
  ngOnInit() {
    this.path = this.pathService.getPath();
    this.control = this.checkPriv.checkPrivilege("/main/economic-enterprises/market/property-setup")
    // console.log(this.path)
    if(this.path[3].toString() != "market-billing"){
      this.loading = true;
    this.propService.getList(0).subscribe(value => {
      this.loading = false;
      this.listOfData = value[0]
      this.listOfData.forEach(item => {
        this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
      });
      this.checkPriv.printOption(value[1].allow_print)
      
      // console.log(this.mapOfExpandedData)
      // this.fcList = this.listOfData
      // this.suggestions = this.listOfData.map((x:any) => x.fees_name)
    })
    }else{
      this.isBilling = true
      this.loading = true;
      this.billingService.getProperties().subscribe(value => {
        this.loading = false;
        // console.log(value)
        this.listOfData = value
        this.listOfData.forEach(item => {
          this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
        });
      })
    }
  }

  edit(data:any){
    // console.log(data)
    this.router.navigate(["/main/economic-enterprises/market/property-setup/edit-form/", data.key])
  }
  print(data:any){
    this.router.navigate(["/main/economic-enterprises/market/property-setup/print/", data.key])
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

  applyFilter(){
    this.propService.getList(this.status_id).subscribe(data => {
      this.listOfData = data[0]
      this.fcList = this.listOfData
    })
  }

  
beginSearch(value:any){
  this.filteredOptions = this.suggestions.filter((option:any) => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
}
triggerSearch(value:any){
  // console.log(value)
  this.listOfData = this.fcList.filter((obj:any) => obj.fees_name.toLowerCase() == value.toLowerCase());


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
  this.propService.getList(this.status_id).subscribe((value:any) => {
    this.listOfData = value[0]
    this.fcList = this.listOfData
    this.suggestions = this.listOfData.map((x:any) => x.fees_name)
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

select(data:any){
  this.modalRef.destroy(data)
}

}
