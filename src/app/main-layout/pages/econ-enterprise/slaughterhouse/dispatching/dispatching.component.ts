import { Component, OnInit } from '@angular/core';
import { DispatchingService } from 'src/core/services/dispatching/dispatching.service';

@Component({
  selector: 'app-dispatching',
  templateUrl: './dispatching.component.html',
  styleUrls: ['./dispatching.component.scss']
})
export class DispatchingComponent implements OnInit {

  listURL = "/main/economic-enterprises/slaughterhouse/dispatching"
  addURL = "/main/economic-enterprises/slaughterhouse/dispatching/add-form"
  editURL = "/main/economic-enterprises/slaughterhouse/dispatching/edit-form"
  printListURL = "/main/economic-enterprises/slaughterhouse/dispatching/print-list"
  formSettings: any = []
  isLoaded = false
  constructor(private dispatchingService: DispatchingService) { }

  ngOnInit() {
    this.dispatchingService.getList(0).subscribe(data => {
      // this.formSettings = data[1]
      this.formSettings = false;
      console.log("asdasd", this.formSettings)
      this.isLoaded = true
    })
  }

}
