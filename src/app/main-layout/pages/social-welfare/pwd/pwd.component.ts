import { Component, OnInit } from '@angular/core';
import { PwdService } from 'src/core/services/pwd/pwd.service';

@Component({
  selector: 'app-pwd',
  templateUrl: './pwd.component.html',
  styleUrls: ['./pwd.component.scss']
})
export class PwdComponent implements OnInit {

  listURL = "/main/social-welfare/pwd-registration"
  addURL = "/main/social-welfare/pwd-registration/add-form"
  editURL = "/main/social-welfare/pwd-registration/edit-form"
  printListURL = "/main/social-welfare/pwd-registration/print-list"

  isLoaded = false
  formSettings: any = []

  constructor(
    private pwdService: PwdService
  ) { }

  ngOnInit() {
    this.pwdService.getPwd().subscribe(data => {
      this.formSettings = data[1]
      console.log(this.formSettings)
      this.isLoaded = true
    })
  }

}
