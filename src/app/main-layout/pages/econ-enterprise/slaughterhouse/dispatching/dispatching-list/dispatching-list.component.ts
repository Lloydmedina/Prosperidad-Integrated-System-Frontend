import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DispatchingService } from 'src/core/services/dispatching/dispatching.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';

@Component({
  selector: 'app-dispatching-list',
  templateUrl: './dispatching-list.component.html',
  styleUrls: ['./dispatching-list.component.scss']
})
export class DispatchingListComponent implements OnInit {

  listOfData: any[] = [];
  listOfDataDetails: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  expandSetDetails = new Set<number>();
  path: any;

  constructor(
    private router: Router,
    private modal: NzModalService,
    private dispatchingService: DispatchingService,
    private notification: NzNotificationService,
    private pathService: PathsegmentService
  ) { }

  ngOnInit() {
    this.isLoading = false;
    this.path = this.pathService.getPath()
    this.dispatchingService.getList(0).subscribe(async data => {
      this.listOfData = data[0];
      this.isLoading = false;
      // console.log("asdasd", data)
    })
  }

  edit(id: any) {
    this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/" + this.path[3] + "/edit-form/" + id])
  }

  print(data:any){
    this.router.navigate(["/main/economic-enterprises/slaughterhouse/dispatching/print-form/", data.main_id])
  }

  remarks: any = ""
  deleteModal = false
  deleteData: any = {}
  delete(data:any){

    
    this.deleteData = data
    this.deleteModal = true;
  }

  handleCancel(){
    this.remarks = ""
    this.deleteModal = false
  }

  handleOk(){
    // this.rentAppService.delete(this.deleteData.rental_application_id, this.remarks).subscribe(async x => {
    //   this.deleteModal = false
    //   this.ngOnInit()
    //   await this.notification.create(
    //     "success",
    //     'Successfully Deleted',
    //     'Fees Charges Record has successfully deleted.'
    //   );
    // },
    // async error => {
    //  await this.notification.create(
    //     "error",
    //     'Unsuccessfully Saved',
    //     'Fees Charges Officials has not been deleted.'
    //   );
    // })
  }

}
