import { Component, OnInit } from '@angular/core';
import { AnteMortemService } from 'src/core/services/ante-mortem/ante-mortem.service';

@Component({
  selector: 'app-ante-mortem',
  templateUrl: './ante-mortem.component.html',
  styleUrls: ['./ante-mortem.component.scss']
})
export class AnteMortemComponent implements OnInit {

  listURL = "/main/economic-enterprises/slaughterhouse/ante-mortem"
  addURL = "/main/economic-enterprises/slaughterhouse/ante-mortem/add-form"
  editURL = "/main/economic-enterprises/slaughterhouse/ante-mortem/edit-form"
  printListURL = "/main/economic-enterprises/slaughterhouse/ante-mortem/print-list"
  formSettings: any = []
  isLoaded = false
  constructor(private anteMortemService: AnteMortemService) { }

  ngOnInit() {
    this.anteMortemService.getAnteMortem(0).subscribe(data => {
      this.formSettings = data[1]
      this.isLoaded = true
    })
  }

}
