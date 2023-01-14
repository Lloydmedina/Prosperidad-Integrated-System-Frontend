import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ChildrenProfilingService } from 'src/core/services/children-profiling/children-profiling.service';

@Component({
  selector: 'app-profiling-list',
  templateUrl: './profiling-list.component.html',
  styleUrls: ['./profiling-list.component.css']
})
export class ProfilingListComponent implements OnInit {

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
    private childrenProfilingService: ChildrenProfilingService,
    private notification: NzNotificationService,
  ) { }

  ngOnInit() {
    this.childrenProfilingService.getChildrenProfiling().subscribe(async data => {
      this.listOfData = data[0];
      this.isLoading = false;
      console.log("asdasd", data)
    })
  }

  edit(id: any) {
    this.router.navigate(["/main/social-welfare/profiling/edit-form/" + id])
  }

  delete(id: any, data: any) {
    this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: data.first_name + " " + data.middle_name + " " + data.last_name +  " will be deleted permanently!",
      nzOnOk: () => 
        this.childrenProfilingService.deleteChildrenProfiling(id).subscribe(data => {
          this.isLoading = true;
          if(data) {
            this.childrenProfilingService.getChildrenProfiling().subscribe(async data => {
              this.listOfData = data[0];
              this.isLoading = false;
            })
            this.notification.create(
              "success",
              'Successfully Deleted',
              'Profiling for Children and Youth has successfully deleted.'
            );
          } else {
            this.notification.create(
              "error",
              'Unsuccessfully Deleted',
              'Profiling for Children and Youth unsuccessfully deleted.'
            );
          }
        })
    });
  }

  print(id: any) {
    this.router.navigate(["/main/social-welfare/profiling/print-form/" + id])
  }

  onExpandChange(id: number, checked: boolean, index: any): void {
    if (checked) {
      this.expandSet.add(id);
      this.childrenProfilingService.getChildrenProfilingDetails(id).subscribe(async data => {
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
