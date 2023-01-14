import { Component, OnInit } from '@angular/core';
import { TenantProfilingService } from 'src/core/services/tenant-profiling/tenant-profiling.service';

@Component({
  selector: 'app-tenant-profiling',
  templateUrl: './tenant-profiling.component.html',
  styleUrls: ['./tenant-profiling.component.css']
})
export class TenantProfilingComponent implements OnInit {

  listURL = "/main/economic-enterprises/market/tenant-profiling"
  addURL = "/main/economic-enterprises/market/tenant-profiling/add-form"
  editURL = "/main/economic-enterprises/market/tenant-profiling/edit-form"
  printListURL = "/main/economic-enterprises/market/tenant-profiling/print-list"
  formSettings: any = []
  isLoaded = false
  constructor(
    private service: TenantProfilingService) { 
 
    }

  ngOnInit() {    
    this.service.getList(0).subscribe(data => {
      this.formSettings = data[1]

      this.isLoaded = true
  })
  }

}
