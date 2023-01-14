import { Component, OnInit } from '@angular/core';
import { DaycareCenterService } from 'src/core/services/daycare-center/daycare-center.service';

@Component({
  selector: 'app-daycare-center',
  templateUrl: './daycare-center.component.html',
  styleUrls: ['./daycare-center.component.css']
})
export class DaycareCenterComponent implements OnInit {

  isLoaded = false

  listURL = "/main/social-welfare/daycare-center"
  addURL = "/main/social-welfare/daycare-center/add-form"
  editURL = "/main/social-welfare/daycare-center/edit-form"
  printListURL = "/main/social-welfare/daycare-center/print-list"

  formSettings: any = []

  constructor(
    private daycareCenterService: DaycareCenterService
  ) { }

  ngOnInit() {
    this.daycareCenterService.getDaycareCenter().subscribe(data => {
      this.formSettings = data[1]

      this.isLoaded = true
    })
  }

}
