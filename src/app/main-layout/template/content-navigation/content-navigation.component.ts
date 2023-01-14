import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NavigationStart, Router, Event as NavigationEvent } from '@angular/router';
import { CheckPrivilegeService } from 'src/core/services/check-privilege/check-privilege.service';
import { PathsegmentService } from 'src/core/services/pathsegment/pathsegment.service';
import { TokenStorageService } from 'src/core/services/token-storage/token-storage.service';
import { PersonService } from 'src/core/services/person/person.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { FamilyCompositionService } from 'src/core/services/family-composition/family-composition.service';
import { HealthCardService } from 'src/core/services/health/health-card/health-card.service';
import { MedicalCertificateService } from 'src/core/services/health/medical-certificate/medical-certificate.service';
import { GeneralIntakeService } from 'src/core/services/general-intake/general-intake.service';
import { BarangayOfficialService } from 'src/core/services/barangay-official-service/barangay-official.service';
import { BusinessService } from 'src/core/services/business/business.service';
import { MedicalAbstractService } from 'src/core/services/health/medical-abstract/medical-abstract.service';
import { SanitaryPermitService } from 'src/core/services/health/sanitary-permit/sanitary-permit.service';
import { EvacuationCenterService } from 'src/core/services/evacuation-center/evacuation-center.service';
import { DafacService } from 'src/core/services/dafac/dafac.service';
import { DafacIntakeService } from 'src/core/services/dafac-intake/dafac-intake.service';
import { AicsIntakeService } from 'src/core/services/aics-intake/aics-intake.service';
import { AicsService } from 'src/core/services/aics/aics.service';
import { AccountTitleService } from 'src/core/services/account-title/account-title.service';
import { FeesChargesService } from 'src/core/services/fees-charges/fees-charges.service';
import { UserService } from 'src/core/services/user/user.service';
import { OscaService } from 'src/core/services/osca/osca.service';
import { OscaIntakeService } from 'src/core/services/osca-intake/osca-intake.service';
import { OscaRegistrationService } from 'src/core/services/osca-registration/osca-registration.service';
import { IndigentService } from 'src/core/services/indigent/indigent.service';
import { IndigentIntakeService } from 'src/core/services/indigent-intake/indigent-intake.service';
import { PwdService } from 'src/core/services/pwd/pwd.service';
import { PwdIntakeService } from 'src/core/services/pwd-intake/pwd-intake.service';
import { SoloParentService } from 'src/core/services/solo-parent/solo-parent.service';
import { SoloParentIntakeService } from 'src/core/services/solo-parent-intake/solo-parent-intake.service';
import { RentalApplicationService } from 'src/core/services/rental-application/rental-application.service';
import { ChildInfoService } from 'src/core/services/child-info/child-info.service';
import { ChildIntakeService } from 'src/core/services/child-intake/child-intake.service';
import { FinancialAssistanceService } from 'src/core/services/financial-assistance/financial-assistance.service';



@Component({
  selector: 'app-content-navigation',
  templateUrl: './content-navigation.component.html',
  styleUrls: ['./content-navigation.component.scss']
})
export class ContentNavigationComponent implements OnInit {

  @Input() listURL: any;
  @Input() addURL: any;
  @Input() editURL: any;
  @Input() printListURL: any;
  @Input() formSettings:any ;
  control: any = {}
  path: any;
  editPath: any;
  allowPrint: any;


  constructor(
    private router: Router,
    private token: TokenStorageService,
    private userService: UserService,
    private checkPriv: CheckPrivilegeService,
    private pathService: PathsegmentService,
    private personService: PersonService,
    private familyService: FamilyCompositionService,
    private generalIntakeService: GeneralIntakeService,
    private bofficialService: BarangayOfficialService,
    private bizService: BusinessService,
    private healthServices : HealthCardService,
    private medicalCertificateService : MedicalCertificateService,
    private medAbstract : MedicalAbstractService,
    private sanitaryPermit : SanitaryPermitService,
    private medicalServices : MedicalCertificateService,
    private evacuationCenterService: EvacuationCenterService,
    private dafacService: DafacService,
    private dafacIntakeService: DafacIntakeService,
    private aicsService: AicsService,
    private aicsIntakeService: AicsIntakeService,
    private accService : AccountTitleService,
    private fcService : FeesChargesService,
    private oscaService: OscaService,
    private oscaIntakeService: OscaIntakeService,
    private oscaRegistrationService: OscaRegistrationService,
    private rentApp: RentalApplicationService,
    private indigentService: IndigentService,
    private indigentIntakeService: IndigentIntakeService,
    private pwdService: PwdService,
    private pwdIntakeService: PwdIntakeService,
    private soloParentService: SoloParentService,
    private soloParentIntakeService: SoloParentIntakeService,
    private childInfoService: ChildInfoService,
    private childIntakeService: ChildIntakeService,
    private financialAssistanceService: FinancialAssistanceService
  ) { }

  show = true;
  showAddButton = false;
  showBackButton = false;
  showPrintButton = false;
  currentUser: any;

  ngOnInit() {
    this.path = this.pathService.getPath();
    this.control = this.checkPriv.checkPrivilege("/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2])
    this.editPath = "/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/edit-form";

    if(this.path.length > 4){
      if(this.path[4].includes("water") || this.path[4].includes("electricity")){
        this.listURL = "/" + this.path[0] + "/" + this.path[1] + "/" + this.path[2] + "/" + this.path[3] + "/" + this.path[4]
     }
  }
    // LIST OF SIDENAV FROM CURRENT USER
    //   this.currentUser = JSON.parse(localStorage.getItem('auth-user') || '{}');

    if (this.path[2] == "person") {
      this.personService.getPerson().subscribe(data => {
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "fc-registration") {
      this.familyService.getFamilyComposition().subscribe(data => {
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "fc-intake") {
      this.generalIntakeService.getGeneralIntake().subscribe(data => {
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "barangay-official") {
      this.bofficialService.getList().subscribe(data => {
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "business") {
      this.bizService.getList(1, 0).subscribe(data => {
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "health-card-individual"){
    this.healthServices.getHealthCardList().subscribe(data => {
      this.allowPrint = data[1].allow_print;
    })
    } else if (this.path[2] == "medical-certificate") {
        this.medicalCertificateService.getMedicalCertificateList().subscribe(data =>{
          this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "dental-certificate") {
      this.healthServices.getDentalCertificateList().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "medical-abstract") {
      this.medAbstract.getMedAbstractList().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "sanitary-permit") {
      this.sanitaryPermit.getList().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "dental-certificate") {
      this.healthServices.getDentalCertificateList().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "account-title") {
      this.accService.getList().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "fees-charges") {
      this.fcService.getList(0).subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "health-card-individual") {
      this.healthServices.getHealthCardList().subscribe(data => {
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "medical-certificate") {
      this.medicalCertificateService.getMedicalCertificateList().subscribe((data : any) =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "dental-certificate") {
      this.healthServices.getDentalCertificateList().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "evacuation-center") {
      this.evacuationCenterService.getEvacuationCenter().subscribe(data => {
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "dafac-registration") {
      this.dafacService.getDafac().subscribe(data => {
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "dafac-intake") {
      this.dafacIntakeService.getDafacIntake().subscribe(data => {
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "aics-intake") {
      this.aicsIntakeService.getAicsIntake().subscribe(data => {
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "aics-registration") {
      this.aicsService.getAics().subscribe(data => {
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "health-card-individual"){
      this.healthServices.getHealthCardList().subscribe(data => {
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "medical-certificate") {
      this.medicalCertificateService.getMedicalCertificateList().subscribe((data : any) =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "dental-certificate") {
      this.healthServices.getDentalCertificateList().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "account-title") {
      this.accService.getList().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "fees-charges") {
      this.fcService.getList(0).subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "osca-registration") {
      this.oscaRegistrationService.getOscaRegistration().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "osca-intake") {
      this.oscaIntakeService.getOscaIntake().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "exhumation-permit") {
    this.fcService.getList(0).subscribe(data =>{
      this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "sc-indigent") {
      this.indigentService.getIndigent().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "indigent-intake") {
      this.indigentIntakeService.getIndigentIntake().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "osca-id") {
      this.oscaService.getOsca().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "healthcard-business") {
      this.fcService.getList(0).subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "water-potability") {
        this.fcService.getList(0).subscribe(data =>{
          this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "cadaver-transfer") {
        this.fcService.getList(0).subscribe(data =>{
          this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "wcc-registration") {
      this.fcService.getList(0).subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "wcc-incident-report") {
      this.fcService.getList(0).subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "child-info-registration") {
      this.childInfoService.getChildInfo().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "child-info-intake") {
      this.childIntakeService.getChildIntake().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "wcc-registration") {
      this.fcService.getList(0).subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "wcc-incident-report") {
      this.fcService.getList(0).subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "wcc-case-conference") {
      this.fcService.getList(0).subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "wcc-summary-intake") {
      this.fcService.getList(0).subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "wcc-acknowledgement") {
      this.fcService.getList(0).subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "wcc-intervention-undertaken") {
      this.fcService.getList(0).subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "wcc-discharge-form") {
      this.fcService.getList(0).subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "wcc-custody-turnover") {
      this.fcService.getList(0).subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "pwd-registration") {
      this.pwdService.getPwd().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "pwd-intake") {
      this.pwdIntakeService.getPwdIntake().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "solo-parent-registration") {
      this.soloParentService.getSoloParent().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "solo-parent-intake") {
      this.soloParentIntakeService.getSoloParentIntake().subscribe(data =>{
        this.allowPrint = data[1].allow_print;
      })
    } else if (this.path[2] == "financial-assistance") {
      this.financialAssistanceService.getFinancialAssistanceFormSettings().subscribe(data =>{
        this.allowPrint = data[0].allow_print;
        // console.log("okay1", data)
      })
    } else{
      if(this.formSettings){
        this.allowPrint = this.formSettings.allow_print
      }
    }

    this.router.events
    .subscribe(
      (event: NavigationEvent) => {

        if(event instanceof NavigationStart) {
          if(event.url.includes("utilities-setup")){
            if(!event.url.includes("add") && !event.url.includes("print") && !event.url.includes("edit")){
              this.listURL = event.url
            }

          this.showPrintButton = false
          }
          if (event.url == this.addURL) {
              this.showAddButton = false;
              this.showPrintButton = false;
              this.showBackButton = true;
          } else if (event.url == this.listURL) {
              if (this.addURL != '') {
                this.showAddButton = true;
              } else {
                this.showAddButton = false;
              }
              this.showPrintButton = true;
              this.showBackButton = false;
          } else if (event.url == this.printListURL) {
              this.showAddButton = false;
              this.showPrintButton = false;
              this.showBackButton = true;
          } else if (this.editPath == this.editURL) {
              this.showAddButton = false;
              this.showPrintButton = false;
              this.showBackButton = true;

          } else {
            this.showAddButton = false;
            this.showPrintButton = false;
            this.showBackButton = true;
          }
        }
    });



    if (this.router.url == this.listURL) {
        this.showAddButton = true;
        this.showPrintButton = true;
        this.showBackButton = false;
    } else if (this.router.url == this.addURL) {
        this.showAddButton = false;
        this.showPrintButton = false;
        this.showBackButton = true;
    } else if (this.router.url == this.printListURL) {
        this.showAddButton = false;
        this.showPrintButton = false;
        this.showBackButton = true;
    } else if (this.editPath == this.editURL) {
        this.showAddButton = false;
        this.showPrintButton = false;
        this.showBackButton = true;
    }
    var arrayItems = JSON.parse(localStorage.getItem('auth-user') || '{}');

    let addLists = arrayItems[4].routes.filter((x:string) => x.includes("add"))
    let printLists = arrayItems[4].routes.filter((x:string) => x.includes("print"))

    if(addLists.length > 0)
    {
      // console.log(addLists)
      for(let x = 0; x < addLists.length; x++)
      {
          if(this.addURL == addLists[x]){
           // console.log("WE")
            this.showAddButton = true
            break;
          }else{
            this.showAddButton = false
          }
      }
    }else{
      this.showAddButton = false
    }

  }

  navigateListForm() {


    this.router.navigate([this.listURL]);
  }

  navigateAddForm() {

    this.router.navigate([this.addURL]);
  }

  navigatePrintList() {
    this.router.navigate([this.printListURL]);
  }

}
