import { Component, OnInit } from '@angular/core';
import { ServiceProviderService } from 'src/core/services/service-provider/service-provider.service';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent implements OnInit {

  isLoaded = false

  listURL = "/main/social-welfare/service-provider"
  addURL = "/main/social-welfare/service-provider/add-form"
  editURL = "/main/social-welfare/service-provider/edit-form"
  printListURL = "/main/social-welfare/service-provider/print-list"

  formSettings: any = []

  constructor(
    private serviceProviderService: ServiceProviderService
  ) { }

  ngOnInit() {
    this.serviceProviderService.getServiceProvider().subscribe(data => {
      this.formSettings = data[1]

      this.isLoaded = true
    })
  }

}
