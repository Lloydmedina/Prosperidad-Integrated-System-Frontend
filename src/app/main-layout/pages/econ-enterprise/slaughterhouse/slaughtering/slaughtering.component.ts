import { Component, OnInit } from '@angular/core';
import { SlaughteringService } from 'src/core/services/slaughtering/slaughtering.service';

@Component({
  selector: 'app-slaughtering',
  templateUrl: './slaughtering.component.html',
  styleUrls: ['./slaughtering.component.scss']
})

export class SlaughteringComponent implements OnInit {
  listURL = "/main/economic-enterprises/slaughterhouse/slaughtering"
  addURL = "/main/economic-enterprises/slaughterhouse/slaughtering/add-form"
  editURL = "/main/economic-enterprises/slaughterhouse/slaughtering/edit-form"
  printListURL = "/main/economic-enterprises/slaughterhouse/slaughtering/print"
  formSettings: any = []
  isLoaded = false
  constructor(private service: SlaughteringService) { }

  ngOnInit() {
    this.service.getList().subscribe(data => {
      this.formSettings = data[1]

      this.isLoaded = true
  })
  }
}
