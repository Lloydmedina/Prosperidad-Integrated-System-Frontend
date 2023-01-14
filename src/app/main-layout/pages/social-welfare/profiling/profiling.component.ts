import { Component, OnInit } from '@angular/core';
import { ChildrenProfilingService } from 'src/core/services/children-profiling/children-profiling.service';

@Component({
  selector: 'app-profiling',
  templateUrl: './profiling.component.html',
  styleUrls: ['./profiling.component.scss']
})
export class ProfilingComponent implements OnInit {

  isLoaded = false

  listURL = "/main/social-welfare/profiling"
  addURL = "/main/social-welfare/profiling/add-form"
  editURL = "/main/social-welfare/profiling/edit-form"
  printListURL = "/main/social-welfare/profiling/print-list"

  formSettings: any = []

  constructor(
    private childrenProfilingService: ChildrenProfilingService
  ) { }

  ngOnInit() {
    this.childrenProfilingService.getChildrenProfiling().subscribe(data => {
      this.formSettings = data[1]

      this.isLoaded = true
    })
  }

}
