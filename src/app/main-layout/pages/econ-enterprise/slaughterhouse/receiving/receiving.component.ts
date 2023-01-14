import { Component, OnInit } from '@angular/core';
import { ReceivingService } from 'src/core/services/receiving/receiving.service';

@Component({
  selector: 'app-receiving',
  templateUrl: './receiving.component.html',
  styleUrls: ['./receiving.component.scss']
})
export class ReceivingComponent implements OnInit {
  listURL = "/main/economic-enterprises/slaughterhouse/receiving"
  addURL = "/main/economic-enterprises/slaughterhouse/receiving/add-form"
  editURL = "/main/economic-enterprises/slaughterhouse/receiving/edit-form"
  printListURL = "/main/economic-enterprises/slaughterhouse/receiving/print-list"
  formSettings: any = []
  isLoaded = false
  constructor(private service: ReceivingService) { }

  ngOnInit() {
    this.service.getList(0).subscribe(data => {
      this.formSettings = data[1]
      this.isLoaded = true
    })
  }

}
