import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { ReceivingService } from 'src/core/services/receiving/receiving.service';

@Component({
  selector: 'app-receiving-browse',
  templateUrl: './receiving-browse.component.html',
  styleUrls: ['./receiving-browse.component.scss']
})
export class ReceivingBrowseComponent implements OnInit {

  listOfData: any[] = [];
  businessList:any =[];
  suggestions:any = [];
  filteredOptions:any = [];
  control = {
    edit: false,
    delete: false
  }

  constructor(
    private router: Router,
    private modal: NzModalService,
    private recService: ReceivingService,
    private notification: NzNotificationService,
    private checkPriv: CheckPrivilegeService,
    private drawerRef: NzDrawerRef<string>
  ) { }
status_id = 0;
reg_status = 0;

regSwitch = false;
statusSwitch = false;


  ngOnInit() {
    this.recService.getRecList().subscribe((value:any) => {
      console.log(value)
      this.listOfData = value
    })
  }

  
  selectBiz(data:any){
    this.drawerRef.close(data);
  }
}
