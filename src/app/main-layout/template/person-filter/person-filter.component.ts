import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EventEmitter } from '@angular/core';
import { PersonService } from 'src/core/services/person/person.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { FamilyCompositionService } from 'src/core/services/family-composition/family-composition.service';

@Component({
  selector: 'app-person-filter',
  templateUrl: './person-filter.component.html',
  styleUrls: ['./person-filter.component.scss']
})
export class PersonFilterComponent implements OnInit {

  validateForm!: FormGroup;
  @Output() valueChange = new EventEmitter();
  @Output() clearChange = new EventEmitter();
  @Output() selectChange = new EventEmitter();

  checked = false;
  date = null;
  path: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private modal: NzModalService,
    private pathService: PathsegmentService,
    private personService: PersonService,
    private familyService: FamilyCompositionService
  ) { }

  ngOnInit() {
    this.path = this.pathService.getPath()

    this.validateForm = this.fb.group({
      first_name: [null, [Validators.required]],
      middle_name: [null],
      last_name: [null, [Validators.required]],
      suffix: [null],
      birth_date: [null],
      statusCheckbox: [null]
    });
  }

  submitForm(): void {
    if(this.validateForm.value.suffix == null) {
      this.validateForm.value.suffix = ""
    }
    if (this.validateForm.value.middle_name == null) {
      this.validateForm.value.middle_name = ""
    }
    this.valueChange.emit(this.validateForm.value);
  }

  clear() {
    if (this.path[2] == "fc-intake") {
      this.familyService.getFamilyComposition().subscribe(async data => {
        this.clearChange.emit(data[0]);
      })
    } else {
      this.personService.getPerson().subscribe(async data => {
        this.clearChange.emit(data[0]);
      })
    }
  }

  selected(value: any) {
    if (value == true) {
      this.checked = true;
      this.selectChange.emit(this.checked);
    } else {
      this.checked = false;
      this.selectChange.emit(this.checked);
    }
    
  }

}
