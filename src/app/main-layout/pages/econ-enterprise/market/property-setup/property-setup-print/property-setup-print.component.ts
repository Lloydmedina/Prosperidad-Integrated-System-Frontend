import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PropertySetupService } from 'src/core/services/property-setup/property-setup.service';
import * as XLSX from 'xlsx';
import { TreeNodeInterface } from '../property-setup-list/property-setup-list.component';


@Component({
  selector: 'app-property-setup-print',
  templateUrl: './property-setup-print.component.html',
  styleUrls: ['./property-setup-print.component.scss']
})
export class PropertySetupPrintComponent implements OnInit {

  count = 0;
  pageSize= 25
  listOfData: any[] = [];
  numPage: any = [];
  filteredList: any[] = []
  isLoading = true;
  formSetting: any = []
  showFooter: boolean = false;
  finalList: any[] = []
  constructor(
    private router: Router,
    private modal: NzModalService,
    private propService: PropertySetupService,
    private notification: NzNotificationService,
  ) { }

  mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};
  ngOnInit() {
    this.propService.getList(0).subscribe(data => {
    
      let x = 1
      let rowCount = 1
      let counter = 0;
      let dtList: any[] = []
      this.listOfData = data[0]
      this.finalList = []
      
      this.listOfData.forEach(item => {
        this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
      });
      
      this.listOfData.forEach((dt:any) => {
          dtList.push(dt)
        if(x == 23){
          x = 0
          this.finalList.push(dtList)
          dtList = []
          this.numPage.push(counter)
          counter++
        }else if(rowCount == this.listOfData.length){
          this.finalList.push(dtList)
          dtList = []
          this.numPage.push(counter)
        }
        x++
        rowCount++
      });
      
      if(this.listOfData.length < 23){
        let diff = 23 - this.listOfData.length
        for(let z = 1; z <= diff; z++){
          this.finalList[0].push({
            key: "",
            title: "",
            amt: ""
          })
        }
      }

      
      console.log( this.finalList[0])
      this.formSetting = data[1];
   
      if(this.formSetting.show_footer == "true"){
        this.showFooter = true
        console.log(this.showFooter)
      }
      this.isLoading = false;
   
      
      // this.listOfData = data[0];
    })
  }
printing = false

  excel() {
    this.modal.confirm({
      nzTitle: 'Do you want to export this to excel?',
      nzOnOk: () => {
        // this.isExcel = true
        let element = document.getElementById('report-section'); 
        // console.log(element)
        const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        let str = "Department_List_Worksheet.xlsx";
        XLSX.writeFile(wb, str);
        // this.isExcel = false
      }
    });
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
