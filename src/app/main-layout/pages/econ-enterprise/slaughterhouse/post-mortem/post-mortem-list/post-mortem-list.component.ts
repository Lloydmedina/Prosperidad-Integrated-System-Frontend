import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { PostMortemService } from 'src/core/services/post-mortem/post-mortem.service';

@Component({
  selector: 'app-post-mortem-list',
  templateUrl: './post-mortem-list.component.html',
  styleUrls: ['./post-mortem-list.component.scss']
})
export class PostMortemListComponent implements OnInit {

  listOfData: any[] = [];
  listOfDataDetails: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  expandSetDetails = new Set<number>();
  path: any;
  formSetting: any = []
  control = {
    edit: false,
    delete: false,
    print_form: true
  }

  constructor(
    private router: Router,
    private modal: NzModalService,
    private postMortemService: PostMortemService,
    private notification: NzNotificationService,
    private pathService: PathsegmentService
  ) { }

  ngOnInit() {
    this.path = this.pathService.getPath()
    this.postMortemService.getPostMortem(0).subscribe(async data => {
      this.listOfData = data[0];
      this.isLoading = false;
      // console.log("asdasd", data)
    })
  }

  edit(id: any) {
    this.router.navigate(["/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/" + this.path[3] + "/edit-form/" + id])
  }

  print(data:any){
    console.log("Data", data)
    if (data.status == 'Approved') {
      this.router.navigate(["/main/economic-enterprises/slaughterhouse/post-mortem/print-form/meat-inspection-certificate/", data.main_id])
    } else if (data.status == 'Disapproved') {
      this.router.navigate(["/main/economic-enterprises/slaughterhouse/post-mortem/print-form/condemnation-slip/", data.main_id])
    }
    // this.router.navigate(["/main/economic-enterprises/slaughterhouse/post-mortem/print-form/", data.main_id])
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
    // this.anteMortemService.deleteAnteMortem(this.deleteData.rental_application_id, this.remarks).subscribe(async x => {
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
