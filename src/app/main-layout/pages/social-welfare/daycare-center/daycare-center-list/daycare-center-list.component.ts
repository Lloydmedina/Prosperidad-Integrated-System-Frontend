import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DaycareCenterService } from 'src/core/services/daycare-center/daycare-center.service';

@Component({
  selector: 'app-daycare-center-list',
  templateUrl: './daycare-center-list.component.html',
  styleUrls: ['./daycare-center-list.component.css']
})
export class DaycareCenterListComponent implements OnInit {

  listOfData: any[] = [];
  listOfDataDetails: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  expandSetDetails = new Set<number>();
  valueClick: boolean = false;
  valueClickDetails: boolean = false;
  
  constructor(
    private router: Router,
    private modal: NzModalService,
    private daycareCenterService: DaycareCenterService,
    private notification: NzNotificationService,
  ) { }

  ngOnInit() {
    this.daycareCenterService.getDaycareCenter().subscribe(async data => {
      this.listOfData = data[0];
      this.isLoading = false;
      console.log("asdasd", data)
    })
  }

  edit(id: any) {
    this.router.navigate(["/main/social-welfare/daycare-center/edit-form/" + id])
  }

  delete(id: any, data: any) {
    this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: data.first_name + " " + data.middle_name + " " + data.last_name +  " will be deleted permanently!",
      nzOnOk: () => 
        this.daycareCenterService.deleteDaycareCenter(id).subscribe(data => {
          this.isLoading = true;
          if(data) {
            this.daycareCenterService.getDaycareCenter().subscribe(async data => {
              this.listOfData = data[0];
              this.isLoading = false;
            })
            this.notification.create(
              "success",
              'Successfully Deleted',
              'Daycare Center has successfully deleted.'
            );
          } else {
            this.notification.create(
              "error",
              'Unsuccessfully Deleted',
              'Daycare Center unsuccessfully deleted.'
            );
          }
        })
    });
  }

  print(id: any) {
    this.router.navigate(["/main/social-welfare/daycare-center/print-form/" + id])
  }

  onExpandChange(id: number, checked: boolean, index: any): void {
    if (checked) {
      this.expandSet.add(id);
      this.daycareCenterService.getDaycareCenterDetails(id).subscribe(async data => {
        this.listOfDataDetails[index] = data;
        console.log("OKSS", data)
      })
    } else {
      this.expandSet.delete(id);
    }
  }

  onExpandChangeDetails(id: number, checked: boolean, index: any): void {
    if (checked) {
      this.expandSetDetails.add(id);
    } else {
      this.expandSetDetails.delete(id);
    }
  }

  rowClick(id: any, checked: boolean, index: any) {
    this.onExpandChange(id, checked, index);
  }

  rowClickDetails(id: any, checked: boolean, index: any) {
    this.onExpandChangeDetails(id, checked, index);
  }

}
