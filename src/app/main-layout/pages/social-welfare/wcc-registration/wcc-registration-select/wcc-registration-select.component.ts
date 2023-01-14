import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PersonService } from 'src/core/services/person/person.service';

@Component({
  selector: 'app-wcc-registration-select',
  templateUrl: './wcc-registration-select.component.html',
  styleUrls: ['./wcc-registration-select.component.scss']
})
export class WccRegistrationSelectComponent implements OnInit {


  listOfData: any[] = [];
  isLoading = true;
  expandSet = new Set<number>();
  searchData: any;
femalePerson : any;
  constructor(
    private router: Router,
    private modal: NzModalService,
    private personService: PersonService,
    private notification: NzNotificationService,
  ) { }

  ngOnInit() {
  }
  loadPerson(){
    this.personService.getPerson().subscribe(data => {

    })
  }
  selectPerson(id: any) {
    this.router.navigate(["/main/social-welfare/wcc-registration/add-form/" + id])
  }

  search(event: Event) {
    this.searchData = event

    this.personService.getPerson().subscribe(data => {

      this.listOfData = data[0];
      this.isLoading = false;
      this.searchData.birth_date = new DatePipe('en-Us').transform(this.searchData.birth_date, 'yyyy-MM-dd' + 'T' +'00:00:00', 'GMT+0800');

      if (this.searchData.birth_date != null) {
        this.listOfData = this.listOfData.filter((data:any) =>
        data.first_name.toLowerCase() == this.searchData.first_name.trim().toLowerCase()
        && data.middle_name.toLowerCase() == this.searchData.middle_name.trim().toLowerCase()
        && data.last_name.toLowerCase() == this.searchData.last_name.trim().toLowerCase()
        && data.suffix.toLowerCase() == this.searchData.suffix.toLowerCase()
        && data.birth_date == this.searchData.birth_date)
      } else {
        this.listOfData = this.listOfData.filter((data:any) =>
        data.first_name.toLowerCase() == this.searchData.first_name.trim().toLowerCase()
        && data.middle_name.toLowerCase() == this.searchData.middle_name.trim().toLowerCase()
        && data.last_name.toLowerCase() == this.searchData.last_name.trim().toLowerCase()
        && data.suffix.toLowerCase() == this.searchData.suffix.toLowerCase())
      }

      if (!this.listOfData.length) {
        this.modal.confirm({
          nzTitle: 'Do you want to add this person?',
          nzContent: this.searchData.first_name + " " + this.searchData.middle_name + " " + this.searchData.last_name +  " is not on the persons list.",
          nzOnCancel:() => {
            this.listOfData = data[0];
          },
          nzOnOk: () => {
            this.router.navigate(["/main/admin-console/person/add-form"], { queryParams: { firstname: this.searchData.first_name, middlename: this.searchData.middle_name, lastname: this.searchData.last_name, suffix_name: this.searchData.suffix, birth_date: this.searchData.birth_date } })
          }
        });
      } else {
        if (this.listOfData[0].status == 'Deleted') {
          this.modal.confirm({
            nzTitle: 'Do you want to Activate this person?',
            nzContent: this.searchData.first_name + " " + this.searchData.middle_name + " " + this.searchData.last_name +  " has already been deleted.",
            nzOnCancel:() => {
                this.listOfData = data[0];
            },
            nzOnOk: () => {
              this.isLoading = true
              this.personService.activatePerson(this.listOfData[0].person_guid, this.listOfData[0]).subscribe(async data => {
                this.router.navigate(["/main/admin-console/person/edit-form/" + this.listOfData[0].person_guid])
                this.notification.create(
                  "success",
                  'Successfully Activated',
                  'Person Record has successfully activated.'
                );
              })
            }
          });
        }
      }
    })

  }

  clear(value: any) {
    this.isLoading = true
    if (value) {
      this.isLoading = false
      this.listOfData = value
    }
  }

  select(value: boolean) {
    this.isLoading = true
    if (value == true) {
      this.personService.getPerson().subscribe(data => {
        this.listOfData = data[0];
        this.isLoading = false;
      })
    } else {
      this.personService.getPersonActiveOnly().subscribe(async data => {
        this.listOfData = data[0];
        this.isLoading = false;
      })
    }
  }

}
