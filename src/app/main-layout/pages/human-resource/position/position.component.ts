import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit {

  
  listURL = "/main/human-resource/position"
  addURL = "/main/human-resource/position/add-form"
  editURL = "/main/human-resource/position/edit-form"
  printListURL = "/main/human-resource/position/print-list"
  constructor() { }

  ngOnInit() {
  }

}
