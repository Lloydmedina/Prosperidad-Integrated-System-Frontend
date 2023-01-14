import { Component, OnInit } from '@angular/core';
import { AicsLetterService } from 'src/core/services/aics-letter/aics-letter.service';

@Component({
  selector: 'app-aics-letter',
  templateUrl: './aics-letter.component.html',
  styleUrls: ['./aics-letter.component.scss']
})
export class AicsLetterComponent implements OnInit {

  isLoaded = false

  listURL = "/main/social-welfare/aics-letter"
  addURL = "/main/social-welfare/aics-letter/add-form"
  editURL = "/main/social-welfare/aics-letter/edit-form"
  printListURL = "/main/social-welfare/aics-letter/print-list"

  formSettings: any = []

  constructor(
    private aicsLetterService: AicsLetterService
  ) { }

  ngOnInit() {
    this.aicsLetterService.getAicsLetter().subscribe(data => {
      this.formSettings = data[1]

      this.isLoaded = true
    })
  }

}
