import { Component, OnInit } from '@angular/core';
import { PropertySetupService } from 'src/core/services/property-setup/property-setup.service';

@Component({
  selector: 'app-property-setup',
  templateUrl: './property-setup.component.html',
  styleUrls: ['./property-setup.component.css']
})
export class PropertySetupComponent implements OnInit {

  listURL = "/main/economic-enterprises/market/property-setup"
  addURL = "/main/economic-enterprises/market/property-setup/add-form"
  editURL = "/main/economic-enterprises/market/property-setup/edit-form"
  printListURL = "/main/economic-enterprises/market/property-setup/print-list"
  formSettings: any = []
  isLoaded = false
  constructor(
    private service: PropertySetupService) { 
 
    }

  ngOnInit() {    
    this.service.getList(0).subscribe(data => {
      this.formSettings = data[1]

      this.isLoaded = true
  })
  }
}
