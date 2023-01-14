import { Component, OnInit } from '@angular/core';
import { FamilyCompositionService } from 'src/core/services/family-composition/family-composition.service';
import { GeneralIntakeService } from 'src/core/services/general-intake/general-intake.service';

@Component({
  selector: 'app-mswd-dashboard',
  templateUrl: './mswd-dashboard.component.html',
  styleUrls: ['./mswd-dashboard.component.scss']
})
export class MswdDashboardComponent implements OnInit {

  deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  familyData: any;
  familyRegisteredNo: any;
  familyIntakeRegisteredNo: any;
  familyRegisteredFourpsNo: any;
  familyRegisteredIPSNo: any;
  
  constructor(
    private familyService: FamilyCompositionService,
    private familyIntakeService: GeneralIntakeService
  ) { }

  ngOnInit() {
    this.familyService.getFamilyComposition().subscribe(data => {
      this.familyRegisteredNo = data[0][0].count;
    })
    this.familyIntakeService.getGeneralIntake().subscribe(data => {
      this.familyIntakeRegisteredNo = data[0][0].count;
    })
    this.familyService.getRegisteredFourps().subscribe(data => {
      this.familyRegisteredFourpsNo = data[0].count;
    })
    this.familyService.getRegisteredIPS().subscribe(data => {
      this.familyRegisteredIPSNo = data[0].count;
    })
  }

}
