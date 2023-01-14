import { Component, OnInit } from '@angular/core';
import { IssuanceService } from 'src/core/services/issuance/issuance.service';

@Component({
  selector: 'app-issuance',
  templateUrl: './issuance.component.html',
  styleUrls: ['./issuance.component.scss']
})
export class IssuanceComponent implements OnInit {

  listURL = "/main/economic-enterprises/slaughterhouse/issuance"
  addURL = "/main/economic-enterprises/slaughterhouse/issuance/add-form"
  editURL = "/main/economic-enterprises/slaughterhouse/issuance/edit-form"
  printListURL = "/main/economic-enterprises/slaughterhouse/issuance/print-list"
  formSettings: any = []
  isLoaded = false
  constructor(private issuanceService: IssuanceService) { }

  ngOnInit() {
    this.issuanceService.getIssuance(0).subscribe(data => {
      this.formSettings = data[1]
      this.isLoaded = true
    })
  }

}
