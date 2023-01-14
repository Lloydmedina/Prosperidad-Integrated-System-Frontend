import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ChildIntakeService } from 'src/core/services/child-intake/child-intake.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';

@Component({
  selector: 'app-child-intake-list',
  templateUrl: './child-intake-list.component.html',
  styleUrls: ['./child-intake-list.component.scss']
})
export class ChildIntakeListComponent implements OnInit {

  listOfData: any[] = [];
  listOfDataDetails: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  expandSetDetails = new Set<number>();

  path: any;

  constructor(
    private router: Router,
    private modal: NzModalService,
    private spIntakeService: ChildIntakeService,
    private notification: NzNotificationService,
    private pathService: PathsegmentService
  ) { }

  ngOnInit() {
    this.path = this.pathService.getPath()
    this.spIntakeService.getChildIntake().subscribe(async data => {
      this.listOfData = data[0];
      this.isLoading = false;
      console.log("DATA", data)
    })
  }

  edit(id: any) {
    this.router.navigate(["/" + this.path[0] +  "/" + this.path[1] +  "/" + this.path[2] + "/edit-form/" + id])
  }

  delete(id: any, data: any) {
    this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: data.first_name + " " + data.middle_name + " " + data.last_name +  " will be deleted permanently!",
      nzOnOk: () => 
        this.spIntakeService.deleteChildIntake(id).subscribe(data => {
          this.isLoading = true;
          if(data) {
            this.spIntakeService.getChildIntake().subscribe(async data => {
              this.listOfData = data[0];
              this.isLoading = false;
            })
            this.notification.create(
              "success",
              'Successfully Deleted',
              'Child Intake Record has successfully deleted.'
            );
          } else {
            this.notification.create(
              "error",
              'Unsuccessfully Deleted',
              'Child Intake Record unsuccessfully deleted.'
            );
          }
        })
    });
  }

  print(id: any) {
    this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/print-form/" + id])
  }

  onExpandChange(id: number, checked: boolean, index: any): void {
    if (checked) {
      this.expandSet.add(id);
      this.spIntakeService.getChildIntakeDetails(id).subscribe(async data => {
        this.listOfDataDetails[index] = data;
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

}
