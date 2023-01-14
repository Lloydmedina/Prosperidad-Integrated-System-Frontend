import { Component, OnInit } from '@angular/core';
import { PostMortemService } from 'src/core/services/post-mortem/post-mortem.service';

@Component({
  selector: 'app-post-mortem',
  templateUrl: './post-mortem.component.html',
  styleUrls: ['./post-mortem.component.scss']
})
export class PostMortemComponent implements OnInit {

  listURL = "/main/economic-enterprises/slaughterhouse/post-mortem"
  addURL = "/main/economic-enterprises/slaughterhouse/post-mortem/add-form"
  editURL = "/main/economic-enterprises/slaughterhouse/post-mortem/edit-form"
  printListURL = "/main/economic-enterprises/slaughterhouse/post-mortem/print-list"
  formSettings: any = []
  isLoaded = false
  constructor(private postMortemService: PostMortemService) { }

  ngOnInit() {
    this.postMortemService.getPostMortem(0).subscribe(data => {
      this.formSettings = data[1]
      this.isLoaded = true
    })
  }

}
