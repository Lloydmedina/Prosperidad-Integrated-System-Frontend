import { Component, OnInit } from '@angular/core';
import { RentalApplicationService } from 'src/core/services/rental-application/rental-application.service';

@Component({
  selector: 'app-rental-application',
  templateUrl: './rental-application.component.html',
  styleUrls: ['./rental-application.component.scss']
})
export class RentalApplicationComponent implements OnInit {
isLoaded = false
  listURL = "/main/economic-enterprises/market/rental-application"
  addURL = "/main/economic-enterprises/market/rental-application/add-form"
  editURL = "/main/economic-enterprises/market/rental-application/edit-form"
  printListURL = "/main/economic-enterprises/market/rental-application/print-list"
  formSettings: any = []
  constructor(
    private rentAppService: RentalApplicationService) { 
 
    }

  ngOnInit() {    
    this.rentAppService.getList(0).subscribe(data => {
      this.formSettings = data[1]

      this.isLoaded = true
    })
  }
}
