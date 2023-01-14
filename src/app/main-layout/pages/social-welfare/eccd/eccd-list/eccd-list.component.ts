import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { EccdFacilityService } from 'src/core/services/eccd-facility/eccd-facility.service';

@Component({
  selector: 'app-eccd-list',
  templateUrl: './eccd-list.component.html',
  styleUrls: ['./eccd-list.component.css']
})
export class EccdListComponent implements OnInit {

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
    private eccdFacilityService: EccdFacilityService,
    private notification: NzNotificationService,
  ) { }

  ngOnInit() {
    this.eccdFacilityService.getEccdFacility().subscribe(async data => {
      this.listOfData = data[0];
      this.isLoading = false;
      console.log("asdasd", data)
    })
  }

  edit(id: any) {
    this.router.navigate(["/main/social-welfare/eccd-facility/edit-form/" + id])
  }

  delete(id: any, data: any) {
    this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: data.first_name + " " + data.middle_name + " " + data.last_name +  " will be deleted permanently!",
      nzOnOk: () => 
        this.eccdFacilityService.deleteEccdFacility(id).subscribe(data => {
          this.isLoading = true;
          if(data) {
            this.eccdFacilityService.getEccdFacility().subscribe(async data => {
              this.listOfData = data[0];
              this.isLoading = false;
            })
            this.notification.create(
              "success",
              'Successfully Deleted',
              'ECCD Facility has successfully deleted.'
            );
          } else {
            this.notification.create(
              "error",
              'Unsuccessfully Deleted',
              'ECCD Facility unsuccessfully deleted.'
            );
          }
        })
    });
  }

  print(id: any) {
    this.router.navigate(["/main/social-welfare/eccd-facility/print-form/" + id])
  }

  onExpandChange(id: number, checked: boolean, index: any): void {
    if (checked) {
      this.expandSet.add(id);
      this.eccdFacilityService.getEccdFacilityDetails(id).subscribe(async data => {
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
