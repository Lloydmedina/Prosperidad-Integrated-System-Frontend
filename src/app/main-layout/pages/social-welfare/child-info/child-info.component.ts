import { Component, OnInit } from '@angular/core';
import { ChildInfoService } from 'src/core/services/child-info/child-info.service';

@Component({
  selector: 'app-child-info',
  templateUrl: './child-info.component.html',
  styleUrls: ['./child-info.component.scss']
})
export class ChildInfoComponent implements OnInit {

  isLoaded = false

  listURL = "/main/social-welfare/child-info-sheet"
  addURL = "/main/social-welfare/child-info-sheet/add-form"
  editURL = "/main/social-welfare/child-info-sheet/edit-form"
  printListURL = "/main/social-welfare/child-info-sheet/print-list"

  formSettings: any = []

  constructor(
    private childInforService: ChildInfoService
  ) { }

  ngOnInit() {
    this.childInforService.getChildInfo().subscribe(data => {
      this.formSettings = data[1]

      this.isLoaded = true
    })
  }

}
