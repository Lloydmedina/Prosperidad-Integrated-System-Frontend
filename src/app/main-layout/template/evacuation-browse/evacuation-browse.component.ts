import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { EvacuationCenterService } from 'src/core/services/evacuation-center/evacuation-center.service';

@Component({
  selector: 'app-evacuation-browse',
  templateUrl: './evacuation-browse.component.html',
  styleUrls: ['./evacuation-browse.component.scss']
})
export class EvacuationBrowseComponent implements OnInit {

  listOfData: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  searchData: any;
  searchText?: any;

  constructor(
    private router: Router,
    private modal: NzModalService,
    private evacuationCenterService: EvacuationCenterService,
    private notification: NzNotificationService,
    private drawerRef: NzDrawerRef<any>
  ) { }

  ngOnInit() {
    this.evacuationCenterService.getEvacuationCenter().subscribe(async data => {
      this.isLoading = false;
      this.listOfData = data[0];
      // console.log("EVACUATION", data)
    })
  }

  onKey() {
    if(this.searchText!== "") {
      let searchValue = this.searchText.toLocaleLowerCase();
      this.listOfData = this.listOfData.filter(data =>{
        return data.reg_name.toLocaleLowerCase().match(searchValue ) ||
        data.brgy_name.toLocaleLowerCase().match(searchValue ) ||
        data.city_mun_name.toLocaleLowerCase().match(searchValue ) ||
        data.province_name.toLocaleLowerCase().match(searchValue ) ||
        data.venue.toLocaleLowerCase().match(searchValue ) ||
        data.venue_condition.toLocaleLowerCase().match(searchValue )
      });
    } else {  
      this.ngOnInit();
    } 
  }
      
  triggerSelect(data: any) {
    this.drawerRef.close(data)
  }

}
