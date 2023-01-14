import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { IndigentService } from 'src/core/services/indigent/indigent.service';
import { OscaRegistrationService } from 'src/core/services/osca-registration/osca-registration.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sc-filter',
  templateUrl: './sc-filter.component.html',
  styleUrls: ['./sc-filter.component.scss']
})
export class ScFilterComponent implements OnInit {

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
    private oscaRegistrationService: OscaRegistrationService,
    private indigentService: IndigentService
  ) { }

  ngOnInit() {
    this.path = this.pathService.getPath()

    this.validateForm = this.fb.group({
      first_name: [null, [Validators.required]],
      middle_name: [null, [Validators.required]],
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
    this.valueChange.emit(this.validateForm.value);
  }

  clear() {
    if (this.path[2] == "osca-id") {
      this.oscaRegistrationService.getOscaRegistration().subscribe(async data => {
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
