import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-examination-setup-list',
  templateUrl: './examination-setup-list.component.html',
  styleUrls: ['./examination-setup-list.component.scss']
})
export class ExaminationSetupListComponent implements OnInit {

  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor(
    private router: Router,
    private modal: NzModalService
  ) { }

  ngOnInit() {
  }

  edit() {
    this.router.navigate(["/main/setup/examination-setup/edit-form"])
  }

  delete() {
    this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzOnOk: () => console.log('OK')
    });
  }

}
