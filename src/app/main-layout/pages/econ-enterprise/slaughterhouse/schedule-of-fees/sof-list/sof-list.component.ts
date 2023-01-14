import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { ScheduleOfFeesService } from 'src/core/services/schedule-of-fees/schedule-of-fees.service';

@Component({
  selector: 'app-sof-list',
  templateUrl: './sof-list.component.html',
  styleUrls: ['./sof-list.component.scss']
})
export class SofListComponent implements OnInit {

  listOfData: any[] = [];
  listOfDataDetails: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  expandSetDetails = new Set<number>();
  path: any;

  constructor(
    private router: Router,
    private modal: NzModalService,
    private sofService: ScheduleOfFeesService,
    private notification: NzNotificationService,
    private pathService: PathsegmentService
  ) { }

  ngOnInit() {
    this.path = this.pathService.getPath()
    this.sofService.getScheduleOfFees(0).subscribe(async data => {
      this.listOfData = data[0];
      this.isLoading = false;
      // console.log("asdasd", data)
    })
  }

  edit(id: any) {
    this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/" + this.path[3] + "/edit-form/" + id])
  }

  delete(id: any, data: any) {
    this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: data.first_name + " " + data.middle_name + " " + data.last_name +  " will be deleted permanently!",
      nzOnOk: () => 
        this.sofService.deleteScheduleOfFees(id).subscribe(data => {
          this.isLoading = true;
          if(data) {
            this.sofService.getScheduleOfFees(0).subscribe(async data => {
              this.listOfData = data[0];
              this.isLoading = false;
            })
            this.notification.create(
              "success",
              'Successfully Deleted',
              'Schedule of Fees has successfully deleted.'
            );
          } else {
            this.notification.create(
              "error",
              'Unsuccessfully Deleted',
              'Schedule of Fees unsuccessfully deleted.'
            );
          }
        })
    });
  }

  print(id: any) {
    this.router.navigate(["/main/economic-enterprises/slaughterhouse/schedule-of-fees/print-form/" + id])
  }

  onExpandChange(id: number, checked: boolean, index: any): void {
    if (checked) {
      this.expandSet.add(id);
      // this.sofService.getScheduleOfFeesEdit(id).subscribe(async data => {
      //   this.listOfDataDetails[index] = data;
      // })
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

}
