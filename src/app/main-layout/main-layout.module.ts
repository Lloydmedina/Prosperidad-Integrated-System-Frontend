import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './template/footer/footer.module';
import { HeaderModule } from './template/header/header.module';
import { DomainComponent } from './pages/admin-console/domain/domain.component';
import { RoleTypeComponent } from './pages/admin-console/role-type/role-type.component';
import { UserComponent } from './pages/admin-console/user/user.component';
import { ApplicationSetupComponent } from './pages/admin-console/application-setup/application-setup.component';
import { GeneralIntakeComponent } from './pages/social-welfare/general-intake/general-intake.component';
import { ContentNavigationModule } from './template/content-navigation/content-navigation.module';
import { PersonComponent } from './pages/admin-console/person/person.component';
import { BusinessSetupComponent } from './pages/health/business-setup/business-setup.component';
import { HealthCardComponent } from './pages/health/health-card/health-card.component';
import { SanitaryPermitComponent } from './pages/health/sanitary-permit/sanitary-permit.component';
import { MedicalCertificateComponent } from './pages/health/medical-certificate/medical-certificate.component';
import { DentalCertificateComponent } from './pages/health/dental-certificate/dental-certificate.component';
import { ClinicalAbstractComponent } from './pages/health/clinical-abstract/clinical-abstract.component';
import { ExaminationSetupComponent } from './pages/health/examination-setup/examination-setup.component';
import { OccupationSetupComponent } from './pages/health/occupation-setup/occupation-setup.component';
import { CompanyComponent } from './pages/admin-console/company/company.component';
import { FamilyCompositionComponent } from './pages/social-welfare/family-composition/family-composition.component';
import { DafacComponent } from './pages/social-welfare/dafac/dafac.component';
import { ProjectLguComponent } from './pages/admin-console/project-lgu/project-lgu.component';
import { NgxPrintModule } from 'ngx-print';
import { SignatoryComponent } from './pages/admin-console/signatory/signatory.component';
import { ElectedOfficialsComponent } from './pages/admin-console/elected-officials/elected-officials.component';
import { DepartmentComponent } from './pages/admin-console/department/department.component';
import { BarangayOfficialComponent } from './pages/admin-console/barangay-official/barangay-official.component';
import { BusinessComponent } from './pages/admin-console/business/business.component';
import { AccountTitleComponent } from './pages/accounting/account-title/account-title.component';
import { EvacuationCenterComponent } from './pages/admin-console/evacuation-center/evacuation-center.component';
import { AicsComponent } from './pages/social-welfare/aics/aics.component';
import { DafacIntakeComponent } from './pages/social-welfare/dafac-intake/dafac-intake.component';
import { AicsIntakeComponent } from './pages/social-welfare/aics-intake/aics-intake.component';
import { FeesChargesComponent } from './pages/admin-console/fees-charges/fees-charges.component';
import { OscaComponent } from './pages/social-welfare/osca/osca.component';
import { OscaIntakeComponent } from './pages/social-welfare/osca-intake/osca-intake.component';
import { ExhumationPermitComponent } from './pages/health/exhumation-permit/exhumation-permit.component';
import { HealthcardBusinessComponent } from './pages/health/healthcard-business/healthcard-business.component';
import { CadaverTransferComponent } from './pages/health/cadaver-transfer/cadaver-transfer.component';
import { WaterPotabilityComponent } from './pages/health/water-potability/water-potability.component';
import { OscaRegistrationComponent } from './pages/social-welfare/osca-registration/osca-registration.component';
import { MarketBillingComponent } from './pages/econ-enterprise/market/market-billing/market-billing.component';
import { IndigentComponent } from './pages/social-welfare/indigent/indigent.component';
import { IndigentIntakeComponent } from './pages/social-welfare/indigent-intake/indigent-intake.component';
import { EmployeeComponent } from './pages/human-resource/employee/employee.component';
import { PositionComponent } from './pages/human-resource/position/position.component';
import { SequencerComponent } from './pages/admin-console/sequencer/sequencer.component';
import { WccIncidentReportComponent } from './pages/social-welfare/wcc-incident-report/wcc-incident-report.component';
import { PwdComponent } from './pages/social-welfare/pwd/pwd.component';
import { PwdIntakeComponent } from './pages/social-welfare/pwd-intake/pwd-intake.component';
import { SoloParentComponent } from './pages/social-welfare/solo-parent/solo-parent.component';
import { SoloParentIntakeComponent } from './pages/social-welfare/solo-parent-intake/solo-parent-intake.component';
import { ReceivingComponent } from './pages/econ-enterprise/slaughterhouse/receiving/receiving.component';
import { SlaughterhouseComponent } from './pages/econ-enterprise/slaughterhouse/slaughterhouse.component';
import { ReceivingBrowseComponent } from './template/receiving-browse/receiving-browse.component';
import { WccRegistrationComponent } from './pages/social-welfare/wcc-registration/wcc-registration.component';
import { ChildIntakeComponent } from './pages/social-welfare/child-intake/child-intake.component';
import { ChildInfoComponent } from './pages/social-welfare/child-info/child-info.component';
import { WccCaseConferenceComponent } from './pages/social-welfare/wcc-case-conference/wcc-case-conference.component';
import { WccSummaryIntakeComponent } from './pages/social-welfare/wcc-summary-intake/wcc-summary-intake.component';
import { WccAcknowledgementComponent } from './pages/social-welfare/wcc-acknowledgement/wcc-acknowledgement.component';
import { WccInterventionUndertakenComponent } from './pages/social-welfare/wcc-intervention-undertaken/wcc-intervention-undertaken.component';
import { WccDischargeFormComponent } from './pages/social-welfare/wcc-discharge-form/wcc-discharge-form.component';
import { WccCustodyTurnoverComponent } from './pages/social-welfare/wcc-custody-turnover/wcc-custody-turnover.component';
import { DaycareCenterComponent } from './pages/social-welfare/daycare-center/daycare-center.component';
import { ProfilingComponent } from './pages/social-welfare/profiling/profiling.component';
import { ServiceProviderComponent } from './pages/social-welfare/service-provider/service-provider.component';
import { EccdComponent } from './pages/social-welfare/eccd/eccd.component';
import { AicsLetterComponent } from './pages/social-welfare/aics-letter/aics-letter.component';
import { AicsVoucherComponent } from './pages/social-welfare/aics-voucher/aics-voucher.component';
import { WaitlistedReportComponent } from './pages/social-welfare/waitlisted-report/waitlisted-report.component';
import { FinancialAssistanceComponent } from './pages/social-welfare/financial-assistance/financial-assistance.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    DomainComponent,
    RoleTypeComponent,
    UserComponent,
    ApplicationSetupComponent,
    GeneralIntakeComponent,
    PersonComponent,
    BusinessSetupComponent,
    HealthCardComponent,
    SanitaryPermitComponent,
    MedicalCertificateComponent,
    DentalCertificateComponent,
    ClinicalAbstractComponent,
    ExaminationSetupComponent,
    OccupationSetupComponent,
    CompanyComponent,
    FamilyCompositionComponent,
    AicsComponent,
    DafacComponent,
    ProjectLguComponent,
    SignatoryComponent,
    ElectedOfficialsComponent,
    DepartmentComponent,
    BarangayOfficialComponent,
    BusinessComponent,
    AccountTitleComponent,
    EvacuationCenterComponent,
    DafacIntakeComponent,
    AicsIntakeComponent,
    FeesChargesComponent,
    OscaComponent,
    OscaIntakeComponent,
    ExhumationPermitComponent,
    HealthcardBusinessComponent,
    CadaverTransferComponent,
    WaterPotabilityComponent,
    OscaRegistrationComponent,
    IndigentComponent,
    IndigentIntakeComponent,
    EmployeeComponent,
    PositionComponent,
    WccRegistrationComponent,
    WccIncidentReportComponent,
    PwdComponent,
    PwdIntakeComponent,
    SoloParentComponent,
    SoloParentIntakeComponent,
    ChildInfoComponent,
    ChildIntakeComponent,
    WccCaseConferenceComponent,
    WccSummaryIntakeComponent,
    WccAcknowledgementComponent,
    WccInterventionUndertakenComponent,
    WccDischargeFormComponent,
    WccCustodyTurnoverComponent,
    DaycareCenterComponent,
    ProfilingComponent,
    ServiceProviderComponent,
    EccdComponent,
    AicsLetterComponent,
    AicsVoucherComponent,
    WaitlistedReportComponent,
    FinancialAssistanceComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HttpClientModule,
    FooterModule,
    HeaderModule,
    ContentNavigationModule,
    NgxPrintModule,
  ]
})
export class MainLayoutModule { }
