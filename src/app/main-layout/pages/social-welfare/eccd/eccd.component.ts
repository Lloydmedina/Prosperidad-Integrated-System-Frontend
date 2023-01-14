import { Component, OnInit } from '@angular/core';
import { EccdFacilityService } from 'src/core/services/eccd-facility/eccd-facility.service';

@Component({
  selector: 'app-eccd',
  templateUrl: './eccd.component.html',
  styleUrls: ['./eccd.component.css']
})
export class EccdComponent implements OnInit {

  isLoaded = false

  listURL = "/main/social-welfare/eccd-facility"
  addURL = "/main/social-welfare/eccd-facility/add-form"
  editURL = "/main/social-welfare/eccd-facility/edit-form"
  printListURL = "/main/social-welfare/eccd-facility/print-list"

  formSettings: any = []

  constructor(
    private eccdFacilityService: EccdFacilityService
  ) { }

  ngOnInit() {
    this.eccdFacilityService.getEccdFacility().subscribe(data => {
      this.formSettings = data[1]

      this.isLoaded = true
    })
  }

}
