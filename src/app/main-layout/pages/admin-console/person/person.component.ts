import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  listURL = "/main/admin-console/person"
  addURL = "/main/admin-console/person/add-form"
  editURL = "/main/admin-console/person/edit-form"
  printListURL = "/main/admin-console/person/print-list"
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
