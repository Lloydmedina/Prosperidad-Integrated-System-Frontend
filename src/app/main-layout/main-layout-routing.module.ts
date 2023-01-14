import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { windowWhen } from 'rxjs';
import { MainLayoutComponent } from './main-layout.component';
import { AccountTitleComponent } from './pages/accounting/account-title/account-title.component';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { AdminConsoleComponent } from './pages/admin-console/admin-console.component';
import { ApplicationSetupComponent } from './pages/admin-console/application-setup/application-setup.component';
import { BarangayOfficialComponent } from './pages/admin-console/barangay-official/barangay-official.component';
import { BusinessComponent } from './pages/admin-console/business/business.component';
import { CompanyComponent } from './pages/admin-console/company/company.component';
import { DepartmentComponent } from './pages/admin-console/department/department.component';
import { DomainComponent } from './pages/admin-console/domain/domain.component';
import { ElectedOfficialsComponent } from './pages/admin-console/elected-officials/elected-officials.component';
import { EvacuationCenterComponent } from './pages/admin-console/evacuation-center/evacuation-center.component';
import { FeesChargesComponent } from './pages/admin-console/fees-charges/fees-charges.component';
import { PersonComponent } from './pages/admin-console/person/person.component';
import { ProjectLguComponent } from './pages/admin-console/project-lgu/project-lgu.component';
import { RoleTypeComponent } from './pages/admin-console/role-type/role-type.component';
import { SequencerComponent } from './pages/admin-console/sequencer/sequencer.component';
import { SignatoryComponent } from './pages/admin-console/signatory/signatory.component';
import { UserComponent } from './pages/admin-console/user/user.component';
import { BudgetComponent } from './pages/budget/budget.component';
import { EconEnterpriseComponent } from './pages/econ-enterprise/econ-enterprise.component';
import { DelinquentComponent } from './pages/econ-enterprise/market/delinquent/delinquent.component';
import { MarketBillingComponent } from './pages/econ-enterprise/market/market-billing/market-billing.component';
import { MarketComponent } from './pages/econ-enterprise/market/market.component';
import { PropertySetupComponent } from './pages/econ-enterprise/market/property-setup/property-setup.component';
import { RentalApplicationComponent } from './pages/econ-enterprise/market/rental-application/rental-application.component';
import { TenantProfilingComponent } from './pages/econ-enterprise/market/tenant-profiling/tenant-profiling.component';
import { UtilitiesSetupComponent } from './pages/econ-enterprise/market/utilities-setup/utilities-setup.component';
import { ReceivingComponent } from './pages/econ-enterprise/slaughterhouse/receiving/receiving.component';
import { SlaughterhouseComponent } from './pages/econ-enterprise/slaughterhouse/slaughterhouse.component';
import { SlaughteringComponent } from './pages/econ-enterprise/slaughterhouse/slaughtering/slaughtering.component';
import { EngineeringComponent } from './pages/engineering/engineering.component';
import { ExecutiveDashboardComponent } from './pages/executive-dashboard/executive-dashboard.component';
import { MswdDashboardComponent } from './pages/executive-dashboard/mswd-dashboard/mswd-dashboard.component';
import { BusinessSetupListComponent } from './pages/health/business-setup/business-setup-list/business-setup-list.component';
import { BusinessSetupComponent } from './pages/health/business-setup/business-setup.component';
import { CadaverTransferComponent } from './pages/health/cadaver-transfer/cadaver-transfer.component';
import { ClinicalAbstractComponent } from './pages/health/clinical-abstract/clinical-abstract.component';
import { DentalCertificateComponent } from './pages/health/dental-certificate/dental-certificate.component';
import { ExaminationSetupComponent } from './pages/health/examination-setup/examination-setup.component';
import { ExhumationPermitComponent } from './pages/health/exhumation-permit/exhumation-permit.component';
import { HealthCardComponent } from './pages/health/health-card/health-card.component';
import { HealthComponent } from './pages/health/health.component';
import { HealthcardBusinessComponent } from './pages/health/healthcard-business/healthcard-business.component';
import { MedicalCertificateComponent } from './pages/health/medical-certificate/medical-certificate.component';
import { OccupationSetupComponent } from './pages/health/occupation-setup/occupation-setup.component';
import { SanitaryPermitComponent } from './pages/health/sanitary-permit/sanitary-permit.component';
import { WaterPotabilityComponent } from './pages/health/water-potability/water-potability.component';
import { EmployeeComponent } from './pages/human-resource/employee/employee.component';
import { HumanResourceComponent } from './pages/human-resource/human-resource.component';
import { PositionComponent } from './pages/human-resource/position/position.component';
import { PropertyManagementComponent } from './pages/property-management/property-management.component';
import { AicsIntakeComponent } from './pages/social-welfare/aics-intake/aics-intake.component';
import { AicsComponent } from './pages/social-welfare/aics/aics.component';
import { DafacIntakeComponent } from './pages/social-welfare/dafac-intake/dafac-intake.component';
import { DafacComponent } from './pages/social-welfare/dafac/dafac.component';
import { FamilyCompositionComponent } from './pages/social-welfare/family-composition/family-composition.component';
import { GeneralIntakeComponent } from './pages/social-welfare/general-intake/general-intake.component';
import { IndigentIntakeComponent } from './pages/social-welfare/indigent-intake/indigent-intake.component';
import { IndigentComponent } from './pages/social-welfare/indigent/indigent.component';
import { OscaIntakeComponent } from './pages/social-welfare/osca-intake/osca-intake.component';
import { OscaRegistrationComponent } from './pages/social-welfare/osca-registration/osca-registration.component';
import { OscaComponent } from './pages/social-welfare/osca/osca.component';
import { PwdIntakeComponent } from './pages/social-welfare/pwd-intake/pwd-intake.component';
import { PwdComponent } from './pages/social-welfare/pwd/pwd.component';
import { SocialWelfareComponent } from './pages/social-welfare/social-welfare.component';
import { WccIncidentReportComponent } from './pages/social-welfare/wcc-incident-report/wcc-incident-report.component';
import { WccRegistrationComponent } from './pages/social-welfare/wcc-registration/wcc-registration.component';
import { SoloParentIntakeComponent } from './pages/social-welfare/solo-parent-intake/solo-parent-intake.component';
import { SoloParentComponent } from './pages/social-welfare/solo-parent/solo-parent.component';
import { ChildInfoComponent } from './pages/social-welfare/child-info/child-info.component';
import { ChildIntakeComponent } from './pages/social-welfare/child-intake/child-intake.component';
import { WccCaseConferenceComponent } from './pages/social-welfare/wcc-case-conference/wcc-case-conference.component';
import { WccSummaryIntakeComponent } from './pages/social-welfare/wcc-summary-intake/wcc-summary-intake.component';
import { BillingComponent } from './pages/econ-enterprise/slaughterhouse/billing/billing.component';
import { MonitoringComponent } from './pages/econ-enterprise/slaughterhouse/monitoring/monitoring.component';
import { PaymentComponent } from './pages/econ-enterprise/slaughterhouse/payment/payment.component';
import { IssuanceComponent } from './pages/econ-enterprise/slaughterhouse/issuance/issuance.component';
import { DispatchingComponent } from './pages/econ-enterprise/slaughterhouse/dispatching/dispatching.component';
import { ScheduleOfFeesComponent } from './pages/econ-enterprise/slaughterhouse/schedule-of-fees/schedule-of-fees.component';
import { AnteMortemComponent } from './pages/econ-enterprise/slaughterhouse/ante-mortem/ante-mortem.component';
import { PostMortemComponent } from './pages/econ-enterprise/slaughterhouse/post-mortem/post-mortem.component';
import { BillingStatementComponent } from './pages/econ-enterprise/slaughterhouse/billing-statement/billing-statement.component';
import { SlaughterhouseRecordsComponent } from './pages/econ-enterprise/slaughterhouse/slaughterhouse-records/slaughterhouse-records.component';
import { WccInterventionUndertakenComponent } from './pages/social-welfare/wcc-intervention-undertaken/wcc-intervention-undertaken.component';
import { WccAcknowledgementComponent } from './pages/social-welfare/wcc-acknowledgement/wcc-acknowledgement.component';
import { WccDischargeFormComponent } from './pages/social-welfare/wcc-discharge-form/wcc-discharge-form.component';
import { WccCustodyTurnoverComponent } from './pages/social-welfare/wcc-custody-turnover/wcc-custody-turnover.component';
import { ProfilingComponent } from './pages/social-welfare/profiling/profiling.component';
import { DaycareCenterComponent } from './pages/social-welfare/daycare-center/daycare-center.component';
import { ServiceProviderComponent } from './pages/social-welfare/service-provider/service-provider.component';
import { EccdComponent } from './pages/social-welfare/eccd/eccd.component';
import { AicsLetterComponent } from './pages/social-welfare/aics-letter/aics-letter.component';
import { AicsVoucherComponent } from './pages/social-welfare/aics-voucher/aics-voucher.component';
import { WaitlistedReportComponent } from './pages/social-welfare/waitlisted-report/waitlisted-report.component';
import { FinancialAssistanceComponent } from './pages/social-welfare/financial-assistance/financial-assistance.component';

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "executive-dashboard",
        component: ExecutiveDashboardComponent,
        children: [
          {
            path: "",
            loadChildren: () =>
              import("./pages/executive-dashboard/executive-dashboard.module").then(
                ed => ed.ExecutiveDashboardModule
              )
          }
        ]
      },
      {
        path: "mswd-dashboard",
        component: MswdDashboardComponent,
        children: [
          {
            path: "",
            loadChildren: () =>
              import("./pages/executive-dashboard/mswd-dashboard/mswd-dashboard.module").then(
                mswd => mswd.MswdDashboardModule
              )
          }
        ]
      },
      {
        path:"economic-enterprises",
        component: EconEnterpriseComponent,
        children:[
          {
            path: "",
            loadChildren : () =>
            import("./pages/econ-enterprise/econ-enterprise.module").then(
              x => x.EconEnterpriseModule
            ),
            children:[
              {
              path: "market",
              component : MarketComponent,
              children :[
                {
                  path: "",
                  loadChildren: () =>
                  import("./pages/econ-enterprise/market/market.module").then(
                    x => x.MarketModule
                  ),
                  children: [
                    {
                    path: "property-setup",
                    component: PropertySetupComponent,
                    children:[
                      {
                        path: "",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/property-setup/property-setup-list/property-setup-list.module").then(
                          x => x.PropertySetupListModule
                        )
                      },
                      {
                        path: "add-form",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/property-setup/property-setup-form/property-setup-form.module").then(
                          x => x.PropertySetupFormModule
                        )
                      },
                      {
                        path: "edit-form/:id",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/property-setup/property-setup-form/property-setup-form.module").then(
                          x => x.PropertySetupFormModule
                        )
                      },
                      {
                      path: "print-list",
                      loadChildren : () =>  import("./pages/econ-enterprise/market/property-setup/property-setup-print/property-setup-print.module").then(
                        x => x.PropertySetupPrintModule
                      )
                      }
                   ]
                  },
                  {
                    path: "tenant-profiling",
                    component: TenantProfilingComponent,
                    children:[
                      {
                        path: "",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/tenant-profiling/tenant-profiling-list/tenant-profiling-list.module").then(
                          x => x.TenantProfilingListModule
                        )
                      },
                      {
                        path: "add-form",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/tenant-profiling/tenant-profiling-form/tenant-profiling-form.module").then(
                          x => x.TenantProfilingFormModule
                        )
                      },
                      {
                        path: "edit-form/:id",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/tenant-profiling/tenant-profiling-form/tenant-profiling-form.module").then(
                          x => x.TenantProfilingFormModule
                        )
                      },
                      {
                      path: "print-list",
                      loadChildren : () =>  import("./pages/econ-enterprise/market/tenant-profiling/tenant-profiling-print-list/tenant-profiling-print-list.module").then(
                        x => x.TenantProfilingPrintListModule
                      )
                      },
                   ]
                  },
                  {
                    path: "utilities-setup",
                    component: UtilitiesSetupComponent,
                    children:[
                      {
                        path: "water",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/utilities-setup/utilities-setup-list/utilities-setup-list.module").then(
                          x => x.UtilitiesSetupListModule
                        )
                      },
                      {
                        path: "electricity",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/utilities-setup/utilities-setup-list/utilities-setup-list.module").then(
                          x => x.UtilitiesSetupListModule
                        )
                      },
                      {
                        path: "add-form",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/utilities-setup/utilities-setup-form/utilities-setup-form.module").then(
                          x => x.UtilitiesSetupFormModule
                        )
                      },
                      {
                        path: "edit-form/:id",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/utilities-setup/utilities-setup-form/utilities-setup-form.module").then(
                          x => x.UtilitiesSetupFormModule
                        )
                      }
                      // {
                      // path: "print-list",
                      // loadChildren : () =>  import("./pages/econ-enterprise/market/utilities-setup/utilities-setup-print-list/utilities-setup-print-list.module").then(
                      //   x => x.TenantProfilingPrintListModule
                      // )
                      // },
                   ]
                  },
                  {
                    path: "market-billing",
                    component: MarketBillingComponent,
                    children:[
                      {
                        path: "",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/market-billing/market-billing-list/market-billing-list.module").then(
                          x => x.MarketBillingListModule
                        )
                      },
                      {
                        path: "add-form",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/market-billing/market-billing-form/market-billing-form.module").then(
                          x => x.MarketBillingFormModule
                        )
                      },
                      {
                        path: "edit-form/:id",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/market-billing/market-billing-form/market-billing-form.module").then(
                          x => x.MarketBillingFormModule
                        )
                      },
                      {
                      path: "print",
                      loadChildren : () =>  import("./pages/econ-enterprise/market/market-billing/market-billing-print/market-billing-print.module").then(
                        x => x.MarketBillingPrintModule
                      )
                      },
                      {
                        path: "print/:id",
                        loadChildren : () =>  import("./pages/econ-enterprise/market/market-billing/market-billing-print/market-billing-print.module").then(
                          x => x.MarketBillingPrintModule
                        )
                        },
                   ]
                  },
                  {
                    path: "rental-application",
                    component: RentalApplicationComponent,
                    children:[
                      {
                        path: "",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/rental-application/rental-application-list/rental-application-list.module").then(
                          x => x.RentalApplicationListModule
                        )
                      },
                      {
                        path: "add-form",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/rental-application/rental-application-form/rental-application-form.module").then(
                          x => x.RentalApplicationFormModule
                        )
                      },
                      {
                        path: "edit-form/:id",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/rental-application/rental-application-form/rental-application-form.module").then(
                          x => x.RentalApplicationFormModule
                        )
                      },
                      {
                      path: "print-list",
                      loadChildren : () =>  import("./pages/econ-enterprise/market/rental-application/rental-application-print-list/rental-application-print-list.module").then(
                        x => x.RentalApplicationPrintListModule
                      )
                      },
                      {
                        path: "print/:id",
                        loadChildren : () =>  import("./pages/econ-enterprise/market/rental-application/rental-application-print/rental-application-print.module").then(
                          x => x.RentalApplicationPrintModule
                        )
                      },
                   ]
                  },
                   {
                    path: "delinquent",
                    component: DelinquentComponent,
                    children:[
                      {
                        path: "",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/delinquent/delinquent-list/delinquent-list.module").then(
                          x => x.DelinquentListModule
                        )
                      },
                      {
                        path: "add-form",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/delinquent/delinquent-form/delinquent-form.module").then(
                          x => x.DelinquentFormModule
                        )
                      },
                      {
                        path: "view/:id",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/market/delinquent/delinquent-print/delinquent-print.module").then(
                          x => x.DelinquentPrintModule
                        )
                      }
                   ]
                  },


                ]
                }
              ]
            },
            {
              path: "slaughterhouse",
              component : SlaughterhouseComponent,
              children :[
                {
                  path: "",
                  loadChildren: () =>
                  import("./pages/econ-enterprise/slaughterhouse/slaughterhouse.module").then(
                    x => x.SlaughterhouseModule
                  ),
                  children: [
                    {
                      path: "receiving",
                      component: ReceivingComponent,
                      children:[
                        {
                          path: "",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/receiving/receiving-list/receiving-list.module").then(
                            x => x.ReceivingListModule
                          )
                        },
                        {
                          path: "add-form",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/receiving/receiving-form/receiving-form.module").then(
                            x => x.ReceivingFormModule
                          )
                        },
                        {
                          path: "edit-form/:id",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/receiving/receiving-form/receiving-form.module").then(
                            x => x.ReceivingFormModule
                          )
                        },
                        {
                        path: "print/:id",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/slaughterhouse/receiving/receiving-print/receiving-print.module").then(
                          x => x.ReceivingPrintModule
                        )
                        }
                     ]
                    },
                    {
                      path: "slaughtering",
                      component: SlaughteringComponent,
                      children:[
                        {
                          path: "",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/slaughtering/slaughtering-list/slaughtering-list.module").then(
                            x => x.SlaughteringListModule
                          )
                        },
                        {
                          path: "add-form",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/slaughtering/slaughtering-form/slaughtering-form.module").then(
                            x => x.SlaughteringFormModule
                          )
                        },
                        {
                          path: "edit-form/:id",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/slaughtering/slaughtering-form/slaughtering-form.module").then(
                            x => x.SlaughteringFormModule
                          )
                        },
                        {
                        path: "print",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/slaughterhouse/slaughtering/slaughtering-print/slaughtering-print.module").then(
                          x => x.SlaughteringPrintModule
                        )
                      }
                     ]
                    },
                    {
                      path: "billing",
                      component: BillingComponent,
                      children:[
                        {
                          path: "",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/billing/billing-list/billing-list.module").then(
                            x => x.BillingListModule
                          )
                        },
                        {
                          path: "add-form",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/billing/billing-form/billing-form.module").then(
                            x => x.BillingFormModule
                          )
                        },
                        {
                          path: "edit-form/:id",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/billing/billing-form/billing-form.module").then(
                            x => x.BillingFormModule
                          )
                        },
                        {
                        path: "print",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/slaughterhouse/slaughtering/slaughtering-print/slaughtering-print.module").then(
                          x => x.SlaughteringPrintModule
                        )
                      }
                     ]
                    },
                    {
                      path: "monitoring",
                      component: MonitoringComponent,
                      children:[
                        {
                          path: "",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/monitoring/monitoring-list/monitoring-list.module").then(
                            x => x.MonitoringListModule
                          )
                        },
                        {
                          path: "add-form",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/monitoring/monitoring-form/monitoring-form.module").then(
                            x => x.MonitoringFormModule
                          )
                        },
                        {
                          path: "edit-form/:id",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/monitoring/monitoring-form/monitoring-form.module").then(
                            x => x.MonitoringFormModule
                          )
                        },
                        {
                        path: "print",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/slaughterhouse/slaughtering/slaughtering-print/slaughtering-print.module").then(
                          x => x.SlaughteringPrintModule
                        )
                      }
                     ]
                    },
                    {
                      path: "payment",
                      component: PaymentComponent,
                      children:[
                        {
                          path: "",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/payment/payment-list/payment-list.module").then(
                            x => x.PaymentListModule
                          )
                        },
                        {
                          path: "add-form",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/payment/payment-form/payment-form.module").then(
                            x => x.PaymentFormModule
                          )
                        },
                        {
                          path: "edit-form/:id",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/payment/payment-form/payment-form.module").then(
                            x => x.PaymentFormModule
                          )
                        },
                        {
                        path: "print",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/slaughterhouse/slaughtering/slaughtering-print/slaughtering-print.module").then(
                          x => x.SlaughteringPrintModule
                        )
                      }
                     ]
                    },
                    {
                      path: "issuance",
                      component: IssuanceComponent,
                      children:[
                        {
                          path: "",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/issuance/issuance-list/issuance-list.module").then(
                            x => x.IssuanceListModule
                          )
                        },
                        {
                          path: "add-form",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/issuance/issuance-form/issuance-form.module").then(
                            x => x.IssuanceFormModule
                          )
                        },
                        {
                          path: "edit-form/:id",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/issuance/issuance-form/issuance-form.module").then(
                            x => x.IssuanceFormModule
                          )
                        },
                        {
                        path: "print",
                        loadChildren : () =>
                        import("./pages/econ-enterprise/slaughterhouse/slaughtering/slaughtering-print/slaughtering-print.module").then(
                          x => x.SlaughteringPrintModule
                        )
                      }
                     ]
                    },
                    {
                      path: "dispatching",
                      component: DispatchingComponent,
                      children:[
                        {
                          path: "",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/dispatching/dispatching-list/dispatching-list.module").then(
                            x => x.DispatchingListModule
                          )
                        },
                        {
                          path: "add-form",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/dispatching/dispatching-form/dispatching-form.module").then(
                            x => x.DispatchingFormModule
                          )
                        },
                        {
                          path: "edit-form/:id",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/dispatching/dispatching-form/dispatching-form.module").then(
                            x => x.DispatchingFormModule
                          )
                        },
                        {
                          path: "print-form/:id",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/dispatching/dispatching-print-form/dispatching-print-form.module").then(
                            x => x.DispatchingPrintFormModule
                          )
                        }
                     ]
                    },
                    {
                      path: "schedule-of-fees",
                      component: ScheduleOfFeesComponent,
                      children:[
                        {
                          path: "",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/schedule-of-fees/sof-list/sof-list.module").then(
                            x => x.SofListModule
                          )
                        },
                        {
                          path: "add-form",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/schedule-of-fees/sof-form/sof-form.module").then(
                            x => x.SofFormModule
                          )
                        },
                        {
                          path: "edit-form/:id",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/schedule-of-fees/sof-form/sof-form.module").then(
                            x => x.SofFormModule
                          )
                        },
                        {
                          path: "print-list",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/schedule-of-fees/sof-print-list/sof-print-list.module").then(
                            x => x.SofPrintListModule
                          )
                        },
                        {
                          path: "print-form/:id",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/schedule-of-fees/sof-print-form/sof-print-form.module").then(
                            x => x.SofPrintFormModule
                          )
                        }
                     ]
                    },
                    {
                      path: "slaughterhouse-records",
                      component: SlaughterhouseRecordsComponent,
                      children:[
                        {
                          path: "",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/slaughterhouse-records/sr-list/sr-list.module").then(
                            x => x.SrListModule
                          )
                        },
                        {
                          path: "add-form",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/slaughterhouse-records/sr-form/sr-form.module").then(
                            x => x.SrFormModule
                          )
                        },
                        {
                          path: "edit-form/:id",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/slaughterhouse-records/sr-form/sr-form.module").then(
                            x => x.SrFormModule
                          )
                        },
                        {
                          path: "print-list",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/slaughterhouse-records/sr-print-list/sr-print-list.module").then(
                            x => x.SrPrintListModule
                          )
                        },
                        {
                          path: "print-form/:id",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/slaughterhouse-records/sr-print-form/sr-print-form.module").then(
                            x => x.SrPrintFormModule
                          )
                        }
                     ]
                    },
                    {
                      path: "ante-mortem",
                      component: AnteMortemComponent,
                      children:[
                        {
                          path: "",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/ante-mortem/ante-mortem-list/ante-mortem-list.module").then(
                            x => x.AnteMortemListModule
                          )
                        },
                        {
                          path: "add-form",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/ante-mortem/ante-mortem-form/ante-mortem-form.module").then(
                            x => x.AnteMortemFormModule
                          )
                        },
                        {
                          path: "edit-form/:id",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/ante-mortem/ante-mortem-form/ante-mortem-form.module").then(
                            x => x.AnteMortemFormModule
                          )
                        },
                        {
                          path: "print-list",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/ante-mortem/ante-mortem-print-list/ante-mortem-print-list.module").then(
                            x => x.AnteMortemPrintListModule
                          )
                        },
                        {
                          path: "print-form/:id",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/ante-mortem/ante-mortem-print-form/ante-mortem-print-form.module").then(
                            x => x.AnteMortemPrintFormModule
                          )
                        }
                     ]
                    },
                    {
                      path: "post-mortem",
                      component: PostMortemComponent,
                      children:[
                        {
                          path: "",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/post-mortem/post-mortem-list/post-mortem-list.module").then(
                            x => x.PostMortemListModule
                          )
                        },
                        {
                          path: "add-form",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/post-mortem/post-mortem-form/post-mortem-form.module").then(
                            x => x.PostMortemFormModule
                          )
                        },
                        {
                          path: "edit-form/:id",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/post-mortem/post-mortem-form/post-mortem-form.module").then(
                            x => x.PostMortemFormModule
                          )
                        },
                        {
                          path: "print-list",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/post-mortem/post-mortem-print-list/post-mortem-print-list.module").then(
                            x => x.PostMortemPrintListModule
                          )
                        },
                        {
                          path: "print-form",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/post-mortem/post-mortem-print-form/post-mortem-print-form.module").then(
                            x => x.PostMortemPrintFormModule
                          ),
                          children:[
                            {
                              path: "meat-inspection-certificate/:id",
                              loadChildren : () =>
                              import("./pages/econ-enterprise/slaughterhouse/post-mortem/post-mortem-print-form/meat-inspection-certificate/meat-inspection-certificate.module").then(
                                x => x.MeatInspectionCertificateModule
                              ),
                            },
                            {
                              path: "condemnation-slip/:id",
                              loadChildren : () =>
                              import("./pages/econ-enterprise/slaughterhouse/post-mortem/post-mortem-print-form/condemnation-slip/condemnation-slip.module").then(
                                x => x.CondemnationSlipModule
                              ),
                            }
                          ]
                        }
                     ]
                    },
                    {
                      path: "billing-statement",
                      component: BillingStatementComponent,
                      children:[
                        {
                          path: "",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/billing-statement/bs-list/bs-list.module").then(
                            x => x.BsListModule
                          )
                        },
                        {
                          path: "add-form",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/billing-statement/bs-form/bs-form.module").then(
                            x => x.BsFormModule
                          )
                        },
                        {
                          path: "edit-form/:id",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/billing-statement/bs-form/bs-form.module").then(
                            x => x.BsFormModule
                          )
                        },
                        {
                          path: "print-list",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/billing-statement/bs-print-list/bs-print-list.module").then(
                            x => x.BsPrintListModule
                          )
                        },
                        {
                          path: "print-form/:id",
                          loadChildren : () =>
                          import("./pages/econ-enterprise/slaughterhouse/billing-statement/bs-print-form/bs-print-form.module").then(
                            x => x.BsPrintFormModule
                          )
                        }
                     ]
                    }
                  ]
                }
              ]
            }
          ]
         }
        ]
      },
      {
        path : "human-resource",
        component : HumanResourceComponent,
        children : [
          {
            path : "",
            loadChildren : () =>
              import("./pages/human-resource/human-resource.module").then(
                hm => hm.HumanResourceModule
              ),
                //sub panels
              children : [
                // ---------------------------------HEALTH CARD ROUTING
                {
                path : "employee",
                component : EmployeeComponent,
                children :
                [
                  // LIST AND ADD-FORM
                  {
                    path : "",
                    loadChildren : () =>
                    import("./pages/human-resource/employee/employee-list/employee-list.module")
                    .then( z => z.EmployeeListModule),
                  },
                  {
                    path : "add-form",
                    loadChildren : () =>
                    import("./pages/human-resource/employee/employee-form/employee-form.module")
                    .then(z => z.EmployeeFormModule)
                  },
                  {
                    path: "edit-form/:id",
                    loadChildren : () => import("./pages/human-resource/employee/employee-form/employee-form.module")
                    .then(z => z.EmployeeFormModule)
                  },
                  // {
                  // path: "print-list",
                  // loadChildren : () => import("./pages/human-resource/employee/employee-print/employee-print.module")
                  // .then(z => z.AccountTitlePrintModule)
                  // },
                ]
              },
              {
                path : "position",
                component : PositionComponent,
                children :
                [
                  // LIST AND ADD-FORM
                  {
                    path : "",
                    loadChildren : () =>
                    import("./pages/human-resource/position/position-list/position-list.module")
                    .then( z => z.PositionListModule),
                  },
                  {
                    path : "add-form",
                    loadChildren : () =>
                    import("./pages/human-resource/position/position-form/position-form.module")
                    .then(z => z.PositionFormModule)
                  },
                  {
                    path: "edit-form/:id",
                    loadChildren : () => import("./pages/human-resource/position/position-form/position-form.module")
                    .then(z => z.PositionFormModule)
                  },
                  // {
                  // path: "print-list",
                  // loadChildren : () => import("./pages/human-resource/position/position-print/position-print.module")
                  // .then(z => z.AccountTitlePrintModule)
                  // },
                ]
              }
            ]

          }]
      },

      {
        path : "accounting",
        component : AccountingComponent,
        children : [
          {
            path : "",
            loadChildren : () =>
              import("./pages/accounting/accounting.module").then(
                hm => hm.AccountingModule
              ),
                //sub panels
              children : [
                // ---------------------------------HEALTH CARD ROUTING
                {
                path : "account-title",
                component : AccountTitleComponent,
                children :
                [
                  // LIST AND ADD-FORM
                  {
                    path : "",
                    loadChildren : () =>
                    import("./pages/accounting/account-title/account-title-list/account-title-list.module")
                    .then( z => z.AccountTitleListModule),
                  },
                  {
                    path : "add-form",
                    loadChildren : () =>
                    import("./pages/accounting/account-title/account-title-form/account-title-form.module")
                    .then(z => z.AccountTitleFormModule)
                  },
                  {
                    path: "edit-form/:id",
                    loadChildren : () => import("./pages/accounting/account-title/account-title-form/account-title-form.module")
                    .then(z => z.AccountTitleFormModule)
                  },
                  {
                  path: "print-list",
                  loadChildren : () => import("./pages/accounting/account-title/account-title-print/account-title-print.module")
                  .then(z => z.AccountTitlePrintModule)
                  },
                ]
              }
            ]

          }]
      },
      {
        path : "health",
        component : HealthComponent,
        children : [
          {
            path : "",
            loadChildren : () =>
              import("./pages/health/health.module").then(
                hm => hm.HealthModule
              ),
                //sub panels
              children : [
                // ---------------------------------HEALTH CARD ROUTING
                {
                path : "health-card-individual",
                component : HealthCardComponent,
                children :
                [
                  // LIST AND ADD-FORM
                  {
                    path : "",
                    loadChildren : () =>
                    import("./pages/health/health-card/health-card-list/health-card-list.module")
                    .then( hm_hc_list => hm_hc_list.HealthCardListModule),
                  },
                  {
                    path : "add-form",
                    loadChildren : () =>
                    import("./pages/health/health-card/health-card-form/health-card-form.module")
                    .then(hm_hc_add => hm_hc_add.HealthCardFormModule)
                  },
                  {
                    path: "edit-form/:id",
                    loadChildren : () => import("./pages/health/health-card/health-card-form/health-card-form.module").then(hm_nc_new => hm_nc_new.HealthCardFormModule)
                  },
                  {
                    path: "edit-form/:id/:personId",
                    loadChildren : () => import("./pages/health/health-card/health-card-from-new/health-card-from-new.module").then(hm_nc_new => hm_nc_new.HealthCardFromNewModule)
                  },
                  {
                    path: "add-form/:personId",
                    loadChildren : () => import("./pages/health/health-card/health-card-from-new/health-card-from-new.module").then(hm_nc_new => hm_nc_new.HealthCardFromNewModule)
                  },
                  {
                  path: "health-card-list-print",
                  loadChildren : () => import("./pages/health/health-card/health-card-list-print/health-card-list-print.module").then(hm_hc_list_print => hm_hc_list_print.HealthCardListPrintModule)
                  },
                  {
                    path: "health-card-print/:id",
                    loadChildren : () => import("./pages/health/health-card/health-card-print/health-card-print.module").then(hm_hc_print => hm_hc_print.HealthCardPrintModule)
                    }
                ]
              },
              // ---------------------------------MEDICAL CERTIFICATE ROUTING
              {
                path : "dental-certificate",
                component : DentalCertificateComponent,
                children : [
                  {
                    path : "",
                    loadChildren : () => import("./pages/health/dental-certificate/dental-certificate-list/dental-certificate-list.module").then(hm_dc_list => hm_dc_list.DentalCertificateListModule)
                  },
                  {
                    path : "add-form",
                    loadChildren : () => import("./pages/health/dental-certificate/dental-certificate-form/dental-certificate-form.module").then(hm_dc_add => hm_dc_add.DentalCertificateFormModule)
                  },
                  {
                    path : "edit-form/:id",
                    loadChildren : () => import("./pages/health/dental-certificate/dental-certificate-form/dental-certificate-form.module").then(hm_dc_add => hm_dc_add.DentalCertificateFormModule)
                  },
                  {
                    path :"add-form/:personId",
                    loadChildren : () => import("./pages/health/dental-certificate/dental-certificate-form-new/dental-certificate-form-new.module").then(hm_dc_add_new => hm_dc_add_new.DentalCertificateFormNewModule)
                  },
                  {
                    path: "edit-form/:id/:personId",
                    loadChildren : () => import("./pages/health/dental-certificate/dental-certificate-form-new/dental-certificate-form-new.module").then(hm_dc_add_new => hm_dc_add_new.DentalCertificateFormNewModule)
                  },
                  {
                    path : "dental-certificate-list-print",
                    loadChildren : () => import("./pages/health/dental-certificate/dental-certificate-list-print/dental-certificate-list-print.module").then(hm_dc_list_print => hm_dc_list_print.DentalCertificateListPrintModule)
                  },
                  {
                    path : "dental-certificate-form-print/:id",
                    loadChildren : () => import("./pages/health/dental-certificate/dental-certificate-form-print/dental-certificate-form-print.module").then(hm_dc_from_print => hm_dc_from_print.DentalCertificateFormPrintModule)
                  },
                ]
              },
              // ---------------------------------MEDICAL CERTIFICATE ROUTING
              {
                path : "medical-certificate",
                component : MedicalCertificateComponent,
                children : [
                  {
                    path : "",
                    loadChildren : () => import("./pages/health/medical-certificate/medical-certificate-list/medical-certificate-list.module").then(hm_mc_list => hm_mc_list.MedicalCertificateListModule)
                  },
                  {
                    path : "add-form",
                    loadChildren : () => import("./pages/health/medical-certificate/medical-certificate-form/medical-certificate-form.module").then(hm_mc_add => hm_mc_add.MedicalCertificateFormModule)
                  },
                  {
                    path : "add-form/:id",
                    loadChildren : () => import("./pages/health/medical-certificate/medical-certificate-form-new/medical-certificate-form-new.module").then(hm_mc_add_new => hm_mc_add_new.MedicalCertificateFormNewModule)
                  },
                  {
                    path : "edit-form/:id/:tid",
                    loadChildren : () => import("./pages/health/medical-certificate/medical-certificate-form-new/medical-certificate-form-new.module").then(hm_mc_add_new => hm_mc_add_new.MedicalCertificateFormNewModule)
                  },
                  {
                    path : "medical-certificate-list-print",
                    loadChildren : () => import("./pages/health/medical-certificate/medical-certificate-list-print/medical-certificate-list-print.module").then(hm_mc_list_print => hm_mc_list_print.MedicalCertificateListPrintModule)
                  },
                  {
                    path : "medical-certificate-form-print/:id",
                    loadChildren : () => import("./pages/health/medical-certificate/medical-certificate-form-print/medical-certificate-form-print.module").then(hm_mc_form_print => hm_mc_form_print.MedicalCertificateFormPrintModule)
                  }

                ]
              },
              // ---------------------------------SANITARY PERMIT ROUTING
              {
                path : "sanitary-permit",
                component : SanitaryPermitComponent,
                children : [
                  {
                    //SANITARY PERMIT LISTING
                    path : "",
                    loadChildren : () => import("./pages/health/sanitary-permit/sanitary-permit-list/sanitary-permit-list.module").then(hm_sp_list => hm_sp_list.SanitaryPermitListModule)

                  },
                  {
                    path : "add-form",
                    loadChildren : () => import("./pages/health/sanitary-permit/sanitary-permit-form/sanitary-permit-form.module").then(hm_sp_person_list => hm_sp_person_list.SanitaryPermitFormModule)
                  },
                  {
                    path : "add-form-new/:id",
                    loadChildren : () => import("./pages/health/sanitary-permit/sanitary-permit-form-new/sanitary-permit-form-new.module").then(hm_sp_add => hm_sp_add.SanitaryPermitFormNewModule)
                  },
                  {
                    path : "edit-form/:id/:transId",
                    loadChildren : () => import("./pages/health/sanitary-permit/sanitary-permit-form-new/sanitary-permit-form-new.module").then(hm_sp_add => hm_sp_add.SanitaryPermitFormNewModule)
                  },
                  {
                    path : "sanitary-permit-form-print/:id",
                    loadChildren : () => import("./pages/health/sanitary-permit/sanitary-permit-form-print/sanitary-permit-form-print.module").then(hm_sp_from_print => hm_sp_from_print.SanitaryPermitFormPrintModule)
                  },
                  {
                    path :"sanitary-permit-list-print",
                    loadChildren : () => import("./pages/health/sanitary-permit/sanitary-permit-list-print/sanitary-permit-list-print.module").then(hm_sp_list_print => hm_sp_list_print.SanitaryPermitListPrintModule)
                  }
                ]
              },
              {
                path : "medical-abstract",
               component : ClinicalAbstractComponent,
               children : [
                 {
                  path : "",
                  loadChildren : () =>
                    import("./pages/health/clinical-abstract/clinical-abstract-list/clinical-abstract-list.module").then(
                      hm_ca => hm_ca.ClinicalAbstractListModule
                    )
                 },
                 {
                   path : "add-form",
                   loadChildren : () => import("./pages/health/clinical-abstract/clinical-abstract-form/clinical-abstract-form.module").then(hm_ca_add => hm_ca_add.ClinicalAbstractFormModule)
                 },
                 {
                  path : "add-form/:id",
                  loadChildren : () => import("./pages/health/clinical-abstract/clinical-abstract-form-new/clinical-abstract-form-new.module").then(hm_ca_new => hm_ca_new.ClinicalAbstractFormNewModule)
                },
                {
                  path : "edit-form/:id/:tid",
                  loadChildren : () => import("./pages/health/clinical-abstract/clinical-abstract-form-new/clinical-abstract-form-new.module").then(hm_ca_new => hm_ca_new.ClinicalAbstractFormNewModule)
                },
                {
                  path : "medical-abstract-form-print/:id",
                  loadChildren : () => import("./pages/health/clinical-abstract/clinical-abstract-form-print/clinical-abstract-form-print.module").then(hm_ca_from_print => hm_ca_from_print.ClinicalAbstractFormPrintModule)
                },
                {
                  path : "medical-abstract-list-print",
                  loadChildren : () => import("./pages/health/clinical-abstract/clinical-abstract-list-print/clinical-abstract-list-print.module").then(hm_ca_list_print => hm_ca_list_print.ClinicalAbstractListPrintModule)
                }

               ]
              },
              {
                path : "exhumation-permit",
                component : ExhumationPermitComponent,
                children : [
                  {
                    path : "",
                    loadChildren : () => import("./pages/health/exhumation-permit/exhumation-permit-list/exhumation-permit-list.module").then(hm_exp => hm_exp.ExhumationPermitListModule)
                  },
                  {
                    path : "add-form",
                    loadChildren : () => import("./pages/health/exhumation-permit/exhumation-permit-form/exhumation-permit-form.module").then(hm_exp_add => hm_exp_add.ExhumationPermitFormModule)
                  },
                  {
                    path : "add-form/:personId",
                    loadChildren : () => import("./pages/health/exhumation-permit/exhumation-permit-from-new/exhumation-permit-form-new.module").then(hm_exp_new => hm_exp_new.ExhumationPermitFormNewModule)
                  },
                  {
                    path : "edit-form/:personId/:tId",
                    loadChildren : () => import("./pages/health/exhumation-permit/exhumation-permit-from-new/exhumation-permit-form-new.module").then(hm_exp_edit => hm_exp_edit.ExhumationPermitFormNewModule)
                  },
                  {
                    path : "exhumation-permit-list-print",
                    loadChildren : () => import("./pages/health/exhumation-permit/exhumation-permit-list-print/exhumation-permit-list-print.module").then(hm_exp_list_print => hm_exp_list_print.ExhumationPermitListPrintModule)
                  },
                  {
                    path : "exhumation-permit-form-print/:id",
                    loadChildren : () => import("./pages/health/exhumation-permit/exhumation-permit-form-print/exhumation-permit-form-print.module").then(hm_exp_form_print => hm_exp_form_print.ExhumationPermitFormPrintModule)
                  }
                ]
              },
              {
                path : "healthcard-business",
                component : HealthcardBusinessComponent,
                children : [
                  {
                    path : "",
                    loadChildren : () => import("./pages/health/healthcard-business/healthcard-business-list/healthcard-business-list.module").then(hcb_list => hcb_list.HealthcardBusinessListModule)
                  },
                  {
                    path : "add-form",
                    loadChildren : () => import("./pages/health/healthcard-business/healthcard-business-form/healthcard-business-form.module").then(hcb_from => hcb_from.HealthcardBusinessFormModule)
                  },
                  {
                    path : "edit-form/:id",
                    loadChildren : () => import("./pages/health/healthcard-business/healthcard-business-form/healthcard-business-form.module").then(hcb_fedit => hcb_fedit.HealthcardBusinessFormModule)
                  },
                  {
                    path : "add-form/:busId",
                    loadChildren : () => import("./pages/health/healthcard-business/healthcard-business-form-new/healthcard-business-form-new.module").then(hcb_new => hcb_new.HealthcardBusinessFormNewModule)
                  },
                  {
                    path : "edit-form/:id/:busId",
                    loadChildren : () => import("./pages/health/healthcard-business/healthcard-business-form-new/healthcard-business-form-new.module").then(hcb_edit => hcb_edit.HealthcardBusinessFormNewModule)
                  },
                  {
                    path : "healthcard-business-list-print",
                    loadChildren : () => import("./pages/health/healthcard-business/healthcard-business-list-print/healthcard-business-list-print.module").then(hcb_list_print => hcb_list_print.HealthcardBusinessListPrintModule)
                  },
                  {
                    path : "healthcard-business-form-print/:id",
                    loadChildren : () => import("./pages/health/healthcard-business/healthcard-business-form-print/healthcard-business-form-print.module").then(hcb_form_print => hcb_form_print.HealthcardBusinessFormPrintModule)
                  }

                ]
              },
              {
                path : "cadaver-transfer",
                component : CadaverTransferComponent,
                children : [
                  {
                    path : "",
                    loadChildren : () => import("./pages/health/cadaver-transfer/cadaver-transfer-list/cadaver-transfer-list.module").then(ct_list => ct_list.CadaverTransferListModule)
                  },
                  {
                    path : "add-form",
                    loadChildren : () => import("./pages/health/cadaver-transfer/cadaver-transfer-form/cadaver-transfer-form.module").then(ct_form => ct_form.CadaverTransferFormModule)
                  },
                  {
                    path: "add-form/:personId",
                    loadChildren : () => import("./pages/health/cadaver-transfer/cadaver-transfer-form-new/cadaver-transfer-form-new.module").then(ct_new => ct_new.CadaverTransferFormNewModule)
                  },
                  {
                    path : "edit-form/:personId/:tId",
                    loadChildren : () => import("./pages/health/cadaver-transfer/cadaver-transfer-form-new/cadaver-transfer-form-new.module").then(ct_edit => ct_edit.CadaverTransferFormNewModule)
                  },
                  {
                    path : "cadaver-transfer-list-print",
                    loadChildren : () => import("./pages/health/cadaver-transfer/cadaver-transfer-list-print/cadaver-transfer-list-print.module").then(ct_list_print => ct_list_print.CadaverTransferListPrintModule)
                  },
                  {
                    path : "cadaver-transfer-form-print/:id",
                    loadChildren : () => import("./pages/health/cadaver-transfer/cadaver-transfer-from-print/cadaver-transfer-form-print.module").then(ct_form_print => ct_form_print.CadaverTransferFormPrintModule)
                  }
                ]
              },
              {
                path : "water-potability",
                component : WaterPotabilityComponent,
                children : [
                  {
                    path : "",
                    loadChildren : () => import("./pages/health/water-potability/water-potability-list/water-potability-list.module").then(wp_list => wp_list.WaterPotabilityListModule)
                  },
                  {
                    path : "add-form",
                    loadChildren : () => import("./pages/health/water-potability/water-potability-form/water-potability-form.module").then(wp_form => wp_form.WaterPotabilityFormModule)
                  },
                  {
                    path : "add-form/:businessId",
                    loadChildren : () => import("./pages/health/water-potability/water-potability-form-new/water-potability-form-new.module").then(wp_new => wp_new.WaterPotabilityFormNewModule)
                  },
                  {
                    path : "edit-form/:businessId/:tId",
                    loadChildren : () => import("./pages/health/water-potability/water-potability-form-new/water-potability-form-new.module").then(wp_edit => wp_edit.WaterPotabilityFormNewModule)
                  },
                  {
                    path : "water-potability-list-print",
                    loadChildren : () => import("./pages/health/water-potability/water-potability-list-print/water-potability-list-print.module").then(wp_list_print => wp_list_print.WaterPotabilityListPrintModule)
                  },
                  {
                    path : "water-potability-form-print/:id",
                    loadChildren : () => import("./pages/health/water-potability/water-potability-form-print/water-potability-form-print.module").then(wp_form_print => wp_form_print.WaterPotabilityFormPrintModule)
                  }
                ]
              },

              // ---------------------------------BUSINESS SETUP ROUTING
              {
                path : "business-setup",
                component : BusinessSetupListComponent,

                children : [
                  {
                  path : "",
                  loadChildren : () => import("./pages/health/business-setup/business-setup-list/business-setup-list.module").then(hm_bs => hm_bs.BusinessSetupListModule)
                  }
                ]
              },
              ]

          },
        ]
      },
      {
        path: "social-welfare",
        component: SocialWelfareComponent,
        children: [
          {
            path: "",
            loadChildren: () =>
              import("./pages/social-welfare/social-welfare.module").then(
                sw => sw.SocialWelfareModule
              ),
              children: [
                {
                  path: "fc-registration",
                  component: FamilyCompositionComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/family-composition/family-composition-list/family-composition-list.module").then(
                        fcl => fcl.FamilyCompositionListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/family-composition/family-composition-form/family-composition-form.module").then(
                        fcf => fcf.FamilyCompositionFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/persons-list-template/persons-list-template.module").then(
                            plt => plt.PersonsListTemplateModule
                          )
                        },
                        {
                          path: "family-composition-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/family-composition/family-composition-form/family-composition-form.module").then(
                            fc => fc.FamilyCompositionFormModule
                          )
                        },
                        {
                          path: "family-composition-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/family-composition/family-composition-form/family-composition-form.module").then(
                            fc => fc.FamilyCompositionFormModule
                          )
                        },
                        {
                          path: "persons-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/family-composition/family-composition-form/family-composition-form.module").then(
                        fcf => fcf.FamilyCompositionFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/family-composition/family-print-list/family-print-list.module").then(
                        fpl => fpl.FamilyPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/family-composition/family-print-form/family-print-form.module").then(
                        fpf => fpf.FamilyPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "fc-intake",
                  component: GeneralIntakeComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/general-intake/general-intake-list/general-intake-list.module").then(
                        gil => gil.GeneralIntakeListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/general-intake/general-intake-form/general-intake-form.module").then(
                        gif => gif.GeneralIntakeFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/fc-list-template/fc-list-template.module").then(
                            flt => flt.FcListTemplateModule
                          )
                        },
                        {
                          path: "fc-intake-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/general-intake/general-intake-form/general-intake-form.module").then(
                            gif => gif.GeneralIntakeFormModule
                          )
                        },
                        {
                          path: "fc-intake-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/general-intake/general-intake-form/general-intake-form.module").then(
                            gif => gif.GeneralIntakeFormModule
                          )
                        },
                        {
                          path: "family-composition-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/general-intake/general-intake-form/general-intake-form.module").then(
                        gif => gif.GeneralIntakeFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/general-intake/general-print-list/general-print-list.module").then(
                        gpl => gpl.GeneralPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/general-intake/general-print-form/general-print-form.module").then(
                        gpf => gpf.GeneralPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "dafac-registration",
                  component: DafacComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/dafac/dafac-list/dafac-list.module").then(
                        gil => gil.DafacListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/dafac/dafac-form/dafac-form.module").then(
                        dafac => dafac.DafacFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/persons-list-template/persons-list-template.module").then(
                            plt => plt.PersonsListTemplateModule
                          )
                        },
                        {
                          path: "dafac-registration-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/dafac/dafac-form/dafac-form.module").then(
                            df => df.DafacFormModule
                          )
                        },
                        {
                          path: "dafac-registration-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/dafac/dafac-form/dafac-form.module").then(
                            df => df.DafacFormModule
                          )
                        },
                        {
                          path: "persons-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/dafac/dafac-form/dafac-form.module").then(
                        dafac => dafac.DafacFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/dafac/dafac-print-list/dafac-print-list.module").then(
                        dpl => dpl.DafacPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/dafac/dafac-print-form/dafac-print-form.module").then(
                        dpf => dpf.DafacPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "dafac-intake",
                  component: DafacIntakeComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/dafac-intake/dafac-intake-list/dafac-intake-list.module").then(
                        dil => dil.DafacIntakeListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/dafac-intake/dafac-intake-form/dafac-intake-form.module").then(
                        dif => dif.DafacIntakeFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/fc-list-template/fc-list-template.module").then(
                            flt => flt.FcListTemplateModule
                          )
                        },
                        {
                          path: "dafac-intake-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/dafac-intake/dafac-intake-form/dafac-intake-form.module").then(
                            dif => dif.DafacIntakeFormModule
                          )
                        },
                        {
                          path: "dafac-intake-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/dafac-intake/dafac-intake-form/dafac-intake-form.module").then(
                            dif => dif.DafacIntakeFormModule
                          )
                        },
                        {
                          path: "dafac-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/dafac-intake/dafac-intake-form/dafac-intake-form.module").then(
                        dif => dif.DafacIntakeFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/dafac-intake/dafac-intake-print-list/dafac-intake-print-list.module").then(
                        dipl => dipl.DafacIntakePrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/dafac-intake/dafac-intake-print-form/dafac-intake-print-form.module").then(
                        dipf => dipf.DafacIntakePrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "aics-registration",
                  component: AicsComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/aics/aics-list/aics-list.module").then(
                        al => al.AicsListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/aics/aics-form/aics-form.module").then(
                        af => af.AicsFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/persons-list-template/persons-list-template.module").then(
                            plt => plt.PersonsListTemplateModule
                          )
                        },
                        {
                          path: "aics-registration-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/aics/aics-form/aics-form.module").then(
                            af => af.AicsFormModule
                          )
                        },
                        {
                          path: "aics-registration-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/aics/aics-form/aics-form.module").then(
                            af => af.AicsFormModule
                          )
                        },
                        {
                          path: "persons-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/aics/aics-form/aics-form.module").then(
                        af => af.AicsFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/aics/aics-print-list/aics-print-list.module").then(
                        apl => apl.AicsPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/aics/aics-print-form/aics-print-form.module").then(
                        apf => apf.AicsPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "aics-intake",
                  component: AicsIntakeComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/aics-intake/aics-intake-list/aics-intake-list.module").then(
                        ail => ail.AicsIntakeListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/aics-intake/aics-intake-form/aics-intake-form.module").then(
                        aif => aif.AicsIntakeFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/fc-list-template/fc-list-template.module").then(
                            flt => flt.FcListTemplateModule
                          )
                        },
                        {
                          path: "aics-intake-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/aics-intake/aics-intake-form/aics-intake-form.module").then(
                            aif => aif.AicsIntakeFormModule
                          )
                        },
                        {
                          path: "aics-intake-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/aics-intake/aics-intake-form/aics-intake-form.module").then(
                            aif => aif.AicsIntakeFormModule
                          )
                        },
                        {
                          path: "aics-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/aics-intake/aics-intake-form/aics-intake-form.module").then(
                        aif => aif.AicsIntakeFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/aics-intake/aics-intake-print-list/aics-intake-print-list.module").then(
                        aipl => aipl.AicsIntakePrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      loadChildren: () =>
                      import("./pages/social-welfare/aics-intake/aics-intake-print-form/aics-intake-print-form.module").then(
                        aipf => aipf.AicsIntakePrintFormModule
                      )
                    }

                  ]
                },
                {
                  path: "osca-id",
                  component: OscaComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/osca/osca-list/osca-list.module").then(
                        ol => ol.OscaListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/osca/osca-form/osca-form.module").then(
                        of => of.OscaFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/sc-list-template/sc-list-template.module").then(
                            slt => slt.ScListTemplateModule
                          )
                        },
                        {
                          path: "osca-id-form/:osca_registration_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/osca/osca-form/osca-form.module").then(
                            of => of.OscaFormModule
                          )
                        },
                        {
                          path: "osca-id-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/osca/osca-form/osca-form.module").then(
                            of => of.OscaFormModule
                          )
                        },
                        {
                          path: "persons-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/osca/osca-form/osca-form.module").then(
                        of => of.OscaFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/osca/osca-print-list/osca-print-list.module").then(
                        opl => opl.OscaPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/osca/osca-print-form/osca-print-form.module").then(
                        opf => opf.OscaPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "osca-intake",
                  component: OscaIntakeComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/osca-intake/osca-intake-list/osca-intake-list.module").then(
                        oil => oil.OscaIntakeListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/osca-intake/osca-intake-form/osca-intake-form.module").then(
                        oif => oif.OscaIntakeFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/sc-list-template/sc-list-template.module").then(
                            slt => slt.ScListTemplateModule
                          )
                        },
                        {
                          path: "osca-intake-form/:osca_registration_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/osca-intake/osca-intake-form/osca-intake-form.module").then(
                            oif => oif.OscaIntakeFormModule
                          )
                        },
                        {
                          path: "osca-intake-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/osca-intake/osca-intake-form/osca-intake-form.module").then(
                            oif => oif.OscaIntakeFormModule
                          )
                        },
                        {
                          path: "osca-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/osca-intake/osca-intake-form/osca-intake-form.module").then(
                        oif => oif.OscaIntakeFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/osca-intake/osca-intake-print-list/osca-intake-print-list.module").then(
                        oipl => oipl.OscaIntakePrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/osca-intake/osca-intake-print-form/osca-intake-print-form.module").then(
                        oipf => oipf.OscaIntakePrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "osca-registration",
                  component: OscaRegistrationComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/osca-registration/osca-registration-list/osca-registration-list.module").then(
                        orl => orl.OscaRegistrationListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/osca-registration/osca-registration-form/osca-registration-form.module").then(
                        orf => orf.OscaRegistrationFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/persons-list-template/persons-list-template.module").then(
                            plt => plt.PersonsListTemplateModule
                          )
                        },
                        {
                          path: "osca-registration-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/osca-registration/osca-registration-form/osca-registration-form.module").then(
                            orf => orf.OscaRegistrationFormModule
                          )
                        },
                        {
                          path: "osca-registration-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/osca-registration/osca-registration-form/osca-registration-form.module").then(
                            orl => orl.OscaRegistrationFormModule
                          )
                        },
                        {
                          path: "persons-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/osca-registration/osca-registration-form/osca-registration-form.module").then(
                        orf => orf.OscaRegistrationFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/osca-registration/osca-registration-print-list/osca-registration-print-list.module").then(
                        orpl => orpl.OscaRegistrationPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/osca-registration/osca-registration-print-form/osca-registration-print-form.module").then(
                        orpf => orpf.OscaRegistrationPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "sc-indigent",
                  component: IndigentComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/indigent/indigent-list/indigent-list.module").then(
                        il => il.IndigentListModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/indigent/indigent-print-list/indigent-print-list.module").then(
                        ipl => ipl.IndigentPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/indigent/indigent-print-form/indigent-print-form.module").then(
                        ipf => ipf.IndigentPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "indigent-intake",
                  component: IndigentIntakeComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/indigent-intake/indigent-intake-list/indigent-intake-list.module").then(
                        iil => iil.IndigentIntakeListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/indigent-intake/indigent-intake-form/indigent-intake-form.module").then(
                        iif => iif.IndigentIntakeFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/fc-list-template/fc-list-template.module").then(
                            flt => flt.FcListTemplateModule
                          )
                        },
                        {
                          path: "indigent-intake-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/indigent-intake/indigent-intake-form/indigent-intake-form.module").then(
                            iif => iif.IndigentIntakeFormModule
                          )
                        },
                        {
                          path: "indigent-intake-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/indigent-intake/indigent-intake-form/indigent-intake-form.module").then(
                            iif => iif.IndigentIntakeFormModule
                          )
                        },
                        {
                          path: "osca-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/indigent-intake/indigent-intake-form/indigent-intake-form.module").then(
                        iif => iif.IndigentIntakeFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/indigent-intake/indigent-intake-print-list/indigent-intake-print-list.module").then(
                        iipl => iipl.IndigentIntakePrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/indigent-intake/indigent-intake-print-form/indigent-intake-print-form.module").then(
                        iipf => iipf.IndigentIntakePrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "pwd-registration",
                  component: PwdComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/pwd/pwd-list/pwd-list.module").then(
                        pl => pl.PwdListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/pwd/pwd-form/pwd-form.module").then(
                        pf => pf.PwdFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/persons-list-template/persons-list-template.module").then(
                            plt => plt.PersonsListTemplateModule
                          )
                        },
                        {
                          path: "pwd-registration-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/pwd/pwd-form/pwd-form.module").then(
                            pf => pf.PwdFormModule
                          )
                        },
                        {
                          path: "pwd-registration-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/pwd/pwd-form/pwd-form.module").then(
                            pf => pf.PwdFormModule
                          )
                        },
                        {
                          path: "persons-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/pwd/pwd-form/pwd-form.module").then(
                        pf => pf.PwdFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/pwd/pwd-print-list/pwd-print-list.module").then(
                        ppl => ppl.PwdPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/pwd/pwd-print-form/pwd-print-form.module").then(
                        ppf => ppf.PwdPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "pwd-intake",
                  component: PwdIntakeComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/pwd-intake/pwd-intake-list/pwd-intake-list.module").then(
                        pil => pil.PwdIntakeListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/pwd-intake/pwd-intake-form/pwd-intake-form.module").then(
                        pif => pif.PwdIntakeFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/fc-list-template/fc-list-template.module").then(
                            flt => flt.FcListTemplateModule
                          )
                        },
                        {
                          path: "pwd-intake-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/pwd-intake/pwd-intake-form/pwd-intake-form.module").then(
                            pif => pif.PwdIntakeFormModule
                          )
                        },
                        {
                          path: "pwd-intake-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/pwd-intake/pwd-intake-form/pwd-intake-form.module").then(
                            pif => pif.PwdIntakeFormModule
                          )
                        },
                        {
                          path: "pwd-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/pwd-intake/pwd-intake-form/pwd-intake-form.module").then(
                        pif => pif.PwdIntakeFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/pwd-intake/pwd-intake-print-list/pwd-intake-print-list.module").then(
                        pipl => pipl.PwdIntakePrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/pwd-intake/pwd-intake-print-form/pwd-intake-print-form.module").then(
                        pipf => pipf.PwdIntakePrintFormModule
                      )
                    }
                  ]
                },
                {
                  path : "wcc-registration",
                  component : WccRegistrationComponent,
                  children : [
                    {
                      path : "",
                      loadChildren: () => import("./pages/social-welfare/wcc-registration/wcc-registration-list/wcc-registration-list.module").then(wcc_r => wcc_r.WccRegistrationListModule)
                    },
                    {
                      path : "add-form",
                      loadChildren : () => import("./pages/social-welfare/wcc-registration/wcc-registration-select/wcc-registration-select.module").then(wcc_s => wcc_s.WccRegistrationSelectModule)
                    },
                    {
                      path : "add-form/:pId",
                      loadChildren : () => import("./pages/social-welfare/wcc-registration/wcc-registration-form/wcc-registration-form.module").then(wcc_new => wcc_new.WccRegistrationFormModule)
                    },
                    {
                      path : "edit-form/:pId/:tId",
                      loadChildren : () => import("./pages/social-welfare/wcc-registration/wcc-registration-form/wcc-registration-form.module").then(wcc_edit => wcc_edit.WccRegistrationFormModule)
                    },
                    {
                      path : "wcc-form-print/:tId",
                      loadChildren : () => import("./pages/social-welfare/wcc-registration/wcc-registration-form-print/wcc-registration-form-print.module").then(wcc_fprint => wcc_fprint.WccRegistrationFormPrintModule)
                    },
                    {
                      path : "print-list",
                      loadChildren : () => import("./pages/social-welfare/wcc-registration/wcc-registration-list-print/wcc-registration-list-print.module").then(wcc_lprint => wcc_lprint.WccRegistrationListPrintModule)
                    }
                    ]
                  },
                  {
                  path: "solo-parent-registration",
                  component: SoloParentComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/solo-parent/sp-list/sp-list.module").then(
                        sl => sl.SpListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/pwd/pwd-form/pwd-form.module").then(
                        pf => pf.PwdFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/persons-list-template/persons-list-template.module").then(
                            plt => plt.PersonsListTemplateModule
                          )
                        },
                        {
                          path: "solo-parent-registration-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/solo-parent/sp-form/sp-form.module").then(
                            spf => spf.SpFormModule
                          )
                        },
                        {
                          path: "solo-parent-registration-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/solo-parent/sp-form/sp-form.module").then(
                            spf => spf.SpFormModule
                          )
                        },
                        {
                          path: "persons-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/solo-parent/sp-form/sp-form.module").then(
                        spf => spf.SpFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/solo-parent/sp-print-list/sp-print-list.module").then(
                        sppl => sppl.SpPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/solo-parent/sp-print-form/sp-print-form.module").then(
                        sppf => sppf.SpPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path : "wcc-incident-report",
                  component : WccIncidentReportComponent,
                  children :[
                    {
                      path : "",
                      loadChildren : () => import("./pages/social-welfare/wcc-incident-report/wcc-incident-report-list/wcc-incident-report-list.module").then(wcc_i => wcc_i.WccIncidentReportListModule)
                    },
                    {
                      path : "add-form",
                      loadChildren : () => import("./pages/social-welfare/wcc-incident-report/wcc-incident-report-add/wcc-incident-report-add.module").then(wcc_iadd => wcc_iadd.WccIncidentReportAddModule)
                    },
                    {
                      path : "add-form/:pId",
                      loadChildren : () => import("./pages/social-welfare/wcc-incident-report/wcc-incident-report-add-form/wcc-incident-report-add-form.module").then(wcc_iaddf => wcc_iaddf.WccIncidentReportAddFormModule)
                    },
                    {
                      path : "edit-form/:pId/:tId",
                      loadChildren : () => import("./pages/social-welfare/wcc-incident-report/wcc-incident-report-add-form/wcc-incident-report-add-form.module").then(wcc_iadde => wcc_iadde.WccIncidentReportAddFormModule)
                    },
                    {
                      path : "form-print/:tId",
                      loadChildren : () => import("./pages/social-welfare/wcc-incident-report/wcc-incident-report-form-print/wcc-incident-report-form-print.module").then(wcc_iaddp => wcc_iaddp.WccIncidentReportFormPrintModule)
                    },
                    {
                      path : "print-list",
                      loadChildren : () => import("./pages/social-welfare/wcc-incident-report/wcc-incident-report-list-print/wcc-incident-report-list-print.module").then(wcc_iaddlp => wcc_iaddlp.WccIncidentReportListPrintModule)
                    }
                  ]
                },
                {
                  path : "wcc-case-conference",
                  component : WccCaseConferenceComponent,
                  children : [
                    {
                      path : "",
                      loadChildren : () => import("./pages/social-welfare/wcc-case-conference/wcc-case-conference-list/wcc-case-conference-list.module").then(a => a.WccCaseConferenceListModule)
                    },
                    {
                      path : "add-form",
                      loadChildren : () => import("./pages/social-welfare/wcc-case-conference/wcc-case-conference-add/wcc-case-conference-add.module").then(ai => ai.WccCaseConferenceAddModule)
                    },
                    {
                      path : "add-form/:pId",
                      loadChildren : () => import("./pages/social-welfare/wcc-case-conference/wcc-case-conference-form/wcc-case-conference-form.module").then(a => a.WccCaseConferenceFormModule)
                    },
                    {
                      path : "edit-form/:pId/:tId",
                      loadChildren : () => import("./pages/social-welfare/wcc-case-conference/wcc-case-conference-form/wcc-case-conference-form.module").then(a => a.WccCaseConferenceFormModule)
                    },
                    {
                      path : "form-print/:tId",
                      loadChildren : () => import("./pages/social-welfare/wcc-case-conference/wcc-case-conference-form-print/wcc-case-conference-form-print.module").then(a => a.WccCaseConferenceFormPrintModule)
                    },
                    {
                      path : "print-list",
                      loadChildren : () => import("./pages/social-welfare/wcc-case-conference/wcc-case-conference-list-print/wcc-case-conference-list-print.module").then(a => a.WccCaseConferenceListPrintModule)
                    }
                  ]
                },
                {
                  path : "wcc-summary-intake",
                  component : WccSummaryIntakeComponent,
                  children : [
                    {
                      path : "",
                      loadChildren: () => import("./pages/social-welfare/wcc-summary-intake/wcc-summary-intake-list/wcc-summary-intake-list.module").then(a => a.WccSummaryIntakeListModule)
                    },
                    {
                      path : "add-form",
                      loadChildren: () => import("./pages/social-welfare/wcc-summary-intake/wcc-summary-intake-add/wcc-summary-intake-add.module").then(a => a.WccSummaryIntakeAddModule)
                    },
                    {
                      path : "add-form/:pId",
                      loadChildren : () => import("./pages/social-welfare/wcc-summary-intake/wcc-summary-intake-form/wcc-summary-intake-form.module").then(a => a.WccSummaryIntakeFormModule)
                    },
                    {
                      path : "edit-form/:pId/:tId",
                      loadChildren: () => import("./pages/social-welfare/wcc-summary-intake/wcc-summary-intake-form/wcc-summary-intake-form.module").then(a => a.WccSummaryIntakeFormModule)
                    },
                    {
                      path : "form-print/:tId",
                      loadChildren : () => import("./pages/social-welfare/wcc-summary-intake/wcc-summary-intake-form-print/wcc-summary-intake-form-print.module").then(a => a.WccSummaryIntakeFormPrintModule)
                    },
                    {
                      path : "print-list",
                      loadChildren : () => import("./pages/social-welfare/wcc-summary-intake/wcc-summary-intake-list-print/wcc-summary-intake-list-print.module").then(a => a.WccSummaryIntakeListPrintModule)
                    }
                  ]
                },
                {
                  path : "wcc-intervention-undertaken",
                  component : WccInterventionUndertakenComponent,
                  children : [
                    {
                      path : "",
                      loadChildren: () => import("./pages/social-welfare/wcc-intervention-undertaken/wcc-iu-list/wcciu-list.module").then(a => a.WcciuListModule)
                    },
                    {
                      path : "add-form",
                      loadChildren : () => import("./pages/social-welfare/wcc-intervention-undertaken/wcc-iu-add/wcciu-add.module").then(a => a.WcciuAddModule)
                    },
                    {
                      path : "add-form/:pId",
                      loadChildren : () => import("./pages/social-welfare/wcc-intervention-undertaken/wcc-iu-form/wcciu-form.module").then(a => a.WcciuFormModule)
                    },
                    {
                      path : "edit-form/:pId/:tId",
                      loadChildren : () => import("./pages/social-welfare/wcc-intervention-undertaken/wcc-iu-form/wcciu-form.module").then(a => a.WcciuFormModule)
                    },
                    {
                      path : "form-print/:tId",
                      loadChildren : () => import("./pages/social-welfare/wcc-intervention-undertaken/wcc-iu-form-print/wcciu-form-print.module").then(a => a.WcciuFormPrintModule)
                    },
                    {
                      path : "print-list",
                      loadChildren : () => import("./pages/social-welfare/wcc-intervention-undertaken/wcc-iu-list-print/wcciu-list-print.module").then(a => a.WcciuListPrintModule)
                    },
                  ]
                },
                {
                  path : "wcc-acknowledgement",
                  component : WccAcknowledgementComponent,
                  children : [
                    {
                      path : "",
                      loadChildren: () => import("./pages/social-welfare/wcc-acknowledgement/wcc-ar-list/wcc-ar-list.module").then(a => a.WccArListModule)
                    },
                    {
                      path : "add-form",
                      loadChildren : () => import("./pages/social-welfare/wcc-acknowledgement/wcc-ar-add/wcc-ar-add.module").then(a => a.WccArAddModule)
                    },
                    {
                      path : "add-form/:pId",
                      loadChildren : () => import("./pages/social-welfare/wcc-acknowledgement/wcc-ar-form/wcc-ar-form.module").then(a => a.WccArFormModule)
                    },
                    {
                      path : "edit-form/:pId/:tId",
                      loadChildren : () => import("./pages/social-welfare/wcc-acknowledgement/wcc-ar-form/wcc-ar-form.module").then(a => a.WccArFormModule)
                    },
                    {
                      path : "form-print/:tId",
                      loadChildren : () => import("./pages/social-welfare/wcc-acknowledgement/wcc-ar-form-print/wcc-ar-form-print.module").then(a => a.WccArFormPrintModule)
                    },
                    {
                      path : "list-print",
                      loadChildren : () => import("./pages/social-welfare/wcc-acknowledgement/wcc-ar-list-print/wcc-ar-list-print.module").then(a => a.WccArListPrintModule)
                    },
                  ]
                },
                {
                  path : "wcc-discharge-form",
                  component : WccDischargeFormComponent,
                  children : [
                    {
                      path : "",
                      loadChildren: () => import("./pages/social-welfare/wcc-discharge-form/wcc-df-list/wcc-df-list.module").then(a => a.WccDfListModule)
                    },
                    {
                      path : "add-form",
                      loadChildren : () => import("./pages/social-welfare/wcc-discharge-form/wcc-df-add/wcc-df-add.module").then(a => a.WccDfAddModule)
                    },
                    {
                      path : "add-form/:pId",
                      loadChildren : () => import("./pages/social-welfare/wcc-discharge-form/wcc-df-form/wcc-df-form.module").then(a => a.WccDfFormModule)
                    },
                    {
                      path : "edit-form/:pId/:tId",
                      loadChildren : () => import("./pages/social-welfare/wcc-discharge-form/wcc-df-form/wcc-df-form.module").then(a => a.WccDfFormModule)
                    },
                    {
                      path : "form-print/:tId",
                      loadChildren : () => import("./pages/social-welfare/wcc-discharge-form/wcc-df-form-print/wcc-df-form-print.module").then(a => a.WccDfFormPrintModule)
                    },
                    {
                      path : "list-print",
                      loadChildren : () => import("./pages/social-welfare/wcc-discharge-form/wcc-df-list-print/wcc-df-list-print.module").then(a => a.WccDfListPrintModule)
                    },
                  ]
                },
                {
                  path : "wcc-custody-turnover",
                  component : WccCustodyTurnoverComponent,
                  children : [
                    {
                      path : "",
                      loadChildren: () => import("./pages/social-welfare/wcc-custody-turnover/wcc-ct-list/wcc-ct-list.module").then(a => a.WccCtListModule)
                    },
                    {
                      path : "add-form",
                      loadChildren : () => import("./pages/social-welfare/wcc-custody-turnover/wcc-ct-add/wcc-ct-add.module").then(a => a.WccCtAddModule)
                    },
                    {
                      path : "add-form/:pId",
                      loadChildren : () => import("./pages/social-welfare/wcc-custody-turnover/wcc-ct-form/wcc-ct-form.module").then(a => a.WccCtFormModule)
                    },
                    {
                      path : "edit-form/:pId/:tId",
                      loadChildren : () => import("./pages/social-welfare/wcc-custody-turnover/wcc-ct-form/wcc-ct-form.module").then(a => a.WccCtFormModule)
                    },
                    {
                      path : "form-print/:tId",
                      loadChildren : () => import("./pages/social-welfare/wcc-custody-turnover/wcc-ct-form-print/wcc-ct-form-print.module").then(a => a.WccCtFormPrintModule)
                    },
                    {
                      path : "list-print",
                      loadChildren : () => import("./pages/social-welfare/wcc-custody-turnover/wcc-ct-list-print/wcc-ct-list-print.module").then(a => a.WccCtListPrintModule)
                    },
                  ]
                },
                {
                  path: "solo-parent-intake",
                  component: SoloParentIntakeComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/solo-parent-intake/sp-intake-list/sp-intake-list.module").then(
                        spil => spil.SpIntakeListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/solo-parent-intake/sp-intake-form/sp-intake-form.module").then(
                        sif => sif.SpIntakeFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/fc-list-template/fc-list-template.module").then(
                            flt => flt.FcListTemplateModule
                          )
                        },
                        {
                          path: "solo-parent-intake-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/solo-parent-intake/sp-intake-form/sp-intake-form.module").then(
                            spif => spif.SpIntakeFormModule
                          )
                        },
                        {
                          path: "solo-parent-intake-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/solo-parent-intake/sp-intake-form/sp-intake-form.module").then(
                            spif => spif.SpIntakeFormModule
                          )
                        },
                        {
                          path: "solo-parent-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/solo-parent-intake/sp-intake-form/sp-intake-form.module").then(
                        spif => spif.SpIntakeFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/solo-parent-intake/sp-intake-print-list/sp-intake-print-list.module").then(
                        spipl => spipl.SpIntakePrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/solo-parent-intake/sp-intake-print-form/sp-intake-print-form.module").then(
                        spipf => spipf.SpIntakePrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "child-info-sheet",
                  component: ChildInfoComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/child-info/child-info-list/child-info-list.module").then(
                        cil => cil.ChildInfoListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/child-info/child-info-form/child-info-form.module").then(
                        cif => cif.ChildInfoFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/persons-list-template/persons-list-template.module").then(
                            plt => plt.PersonsListTemplateModule
                          )
                        },
                        {
                          path: "child-info-registration-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/child-info/child-info-form/child-info-form.module").then(
                            cif => cif.ChildInfoFormModule
                          )
                        },
                        {
                          path: "child-info-registration-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/child-info/child-info-form/child-info-form.module").then(
                            cif => cif.ChildInfoFormModule
                          )
                        },
                        {
                          path: "persons-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/child-info/child-info-form/child-info-form.module").then(
                        cif => cif.ChildInfoFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/child-info/child-info-print-list/child-info-print-list.module").then(
                        cipl => cipl.ChildInfoPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/child-info/child-info-print-form/child-info-print-form.module").then(
                        cipf => cipf.ChildInfoPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "child-info-intake",
                  component: ChildIntakeComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/child-intake/child-intake-list/child-intake-list.module").then(
                        cil => cil.ChildIntakeListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/child-intake/child-intake-form/child-intake-form.module").then(
                        cif => cif.ChildIntakeFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/fc-list-template/fc-list-template.module").then(
                            flt => flt.FcListTemplateModule
                          )
                        },
                        {
                          path: "child-intake-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/child-intake/child-intake-form/child-intake-form.module").then(
                            cif => cif.ChildIntakeFormModule
                          )
                        },
                        {
                          path: "child-intake-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/child-intake/child-intake-form/child-intake-form.module").then(
                            cif => cif.ChildIntakeFormModule
                          )
                        },
                        {
                          path: "child-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/child-intake/child-intake-form/child-intake-form.module").then(
                        cif => cif.ChildIntakeFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/child-intake/child-intake-print-list/child-intake-print-list.module").then(
                        cipl => cipl.ChildIntakePrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/child-intake/child-intake-print-form/child-intake-print-form.module").then(
                        cipf => cipf.ChildIntakePrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "profiling",
                  component: ProfilingComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/profiling/profiling-list/profiling-list.module").then(
                        pl => pl.ProfilingListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/profiling/profiling-form/profiling-form.module").then(
                        pf => pf.ProfilingFormModule
                      )
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/profiling/profiling-form/profiling-form.module").then(
                        pf => pf.ProfilingFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/profiling/profiling-print-list/profiling-print-list.module").then(
                        ppl => ppl.ProfilingPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/profiling/profiling-print-form/profiling-print-form.module").then(
                        ppf => ppf.ProfilingPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "daycare-center",
                  component: DaycareCenterComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/daycare-center/daycare-center-list/daycare-center-list.module").then(
                        cil => cil.DaycareCenterListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/daycare-center/daycare-center-form/daycare-center-form.module").then(
                        cif => cif.DaycareCenterFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/persons-list-template/persons-list-template.module").then(
                            plt => plt.PersonsListTemplateModule
                          )
                        },
                        {
                          path: "daycare-center-registration-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/daycare-center/daycare-center-form/daycare-center-form.module").then(
                            cif => cif.DaycareCenterFormModule
                          )
                        },
                        {
                          path: "daycare-center-registration-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/daycare-center/daycare-center-form/daycare-center-form.module").then(
                            cif => cif.DaycareCenterFormModule
                          )
                        },
                        {
                          path: "persons-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/daycare-center/daycare-center-form/daycare-center-form.module").then(
                        cif => cif.DaycareCenterFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/daycare-center/daycare-center-print-list/daycare-center-print-list.module").then(
                        cipl => cipl.DaycareCenterPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/daycare-center/daycare-center-print-form/daycare-center-print-form.module").then(
                        cipf => cipf.DaycareCenterPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "service-provider",
                  component: ServiceProviderComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/service-provider/service-provider-list/service-provider-list.module").then(
                        cil => cil.ServiceProviderListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/service-provider/service-provider-form/service-provider-form.module").then(
                        cif => cif.ServiceProviderFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/persons-list-template/persons-list-template.module").then(
                            plt => plt.PersonsListTemplateModule
                          )
                        },
                        {
                          path: "service-provider-registration-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/service-provider/service-provider-form/service-provider-form.module").then(
                            cif => cif.ServiceProviderFormModule
                          )
                        },
                        {
                          path: "service-provider-registration-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/service-provider/service-provider-form/service-provider-form.module").then(
                            cif => cif.ServiceProviderFormModule
                          )
                        },
                        {
                          path: "persons-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/service-provider/service-provider-form/service-provider-form.module").then(
                        cif => cif.ServiceProviderFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/service-provider/service-provider-print-list/service-provider-print-list.module").then(
                        cipl => cipl.ServiceProviderPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/service-provider/service-provider-print-form/service-provider-print-form.module").then(
                        cipf => cipf.ServiceProviderPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "eccd-facility",
                  component: EccdComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/eccd/eccd-list/eccd-list.module").then(
                        pl => pl.EccdListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/eccd/eccd-form/eccd-form.module").then(
                        pf => pf.EccdFormModule
                      )
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/eccd/eccd-form/eccd-form.module").then(
                        pf => pf.EccdFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/eccd/eccd-print-list/eccd-print-list.module").then(
                        ppl => ppl.EccdPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/eccd/eccd-print-form/eccd-print-form.module").then(
                        ppf => ppf.EccdPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "aics-letter",
                  component: AicsLetterComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/aics-letter/aics-letter-list/aics-letter-list.module").then(
                        sl => sl.AicsLetterListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/aics-letter/aics-letter-form/aics-letter-form.module").then(
                        pf => pf.AicsLetterFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/aics-intake-template/aics-intake-template.module").then(
                            plt => plt.AicsIntakeTemplateModule
                          )
                        },
                        {
                          path: "aics-letter-registration-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/aics-letter/aics-letter-form/aics-letter-form.module").then(
                            spf => spf.AicsLetterFormModule
                          )
                        },
                        {
                          path: "aics-letter-registration-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/aics-letter/aics-letter-form/aics-letter-form.module").then(
                            spf => spf.AicsLetterFormModule
                          )
                        },
                        {
                          path: "persons-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/aics-letter/aics-letter-form/aics-letter-form.module").then(
                        spf => spf.AicsLetterFormModule
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/aics-letter/aics-letter-print-list/aics-letter-print-list.module").then(
                        sppl => sppl.AicsLetterPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/aics-letter/aics-letter-print-form/aics-letter-print-form.module").then(
                        sppf => sppf.AicsLetterPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "aics-voucher",
                  component: AicsVoucherComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/aics-voucher/aics-voucher-list/aics-voucher-list.module").then(
                        sl => sl.AicsVoucherListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/aics-voucher/aics-voucher-form/aics-voucher-form.module").then(
                        pf => pf.AicsVoucherFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/aics-intake-template/aics-intake-template.module").then(
                            plt => plt.AicsIntakeTemplateModule
                          )
                        },
                        {
                          path: "aics-voucher-registration-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/aics-voucher/aics-voucher-form/aics-voucher-form.module").then(
                            spf => spf.AicsVoucherFormModule
                          )
                        },
                        {
                          path: "aics-voucher-registration-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/aics-voucher/aics-voucher-form/aics-voucher-form.module").then(
                            spf => spf.AicsVoucherFormModule
                          )
                        },
                        {
                          path: "persons-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/aics-voucher/aics-voucher-form/aics-voucher-form.module").then(
                        spf => spf.AicsVoucherFormModule  
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/aics-voucher/aics-voucher-print-list/aics-voucher-print-list.module").then(
                        sppl => sppl.AicsVoucherPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/aics-voucher/aics-voucher-print-form/aics-voucher-print-form.module").then(
                        sppf => sppf.AicsVoucherPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "waitlisted-report",
                  component: WaitlistedReportComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/waitlisted-report/waitlisted-report-list/waitlisted-report-list.module").then(
                        sl => sl.WaitlistedReportListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/waitlisted-report/waitlisted-report-form/waitlisted-report-form.module").then(
                        pf => pf.WaitlistedReportFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/osca-intake-template-list/osca-intake-template-list.module").then(
                            plt => plt.OscaIntakeTemplateListModule
                          )
                        },
                        {
                          path: "waitlisted-report-registration-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/waitlisted-report/waitlisted-report-form/waitlisted-report-form.module").then(
                            spf => spf.WaitlistedReportFormModule
                          )
                        },
                        {
                          path: "waitlisted-report-registration-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/waitlisted-report/waitlisted-report-form/waitlisted-report-form.module").then(
                            spf => spf.WaitlistedReportFormModule
                          )
                        },
                        {
                          path: "persons-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/waitlisted-report/waitlisted-report-form/waitlisted-report-form.module").then(
                        spf => spf.WaitlistedReportFormModule  
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/waitlisted-report/waitlisted-report-print-list/waitlisted-report-print-list.module").then(
                        sppl => sppl.WaitlistedReportPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/waitlisted-report/waitlisted-report-print-form/waitlisted-report-print-form.module").then(
                        sppf => sppf.WaitlistedReportPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "dromic",
                  component: WaitlistedReportComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/social-welfare/dromic/dromic-list/dromic-list.module").then(
                        sl => sl.DromicListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/social-welfare/dromic/dromic-form/dromic-form.module").then(
                        pf => pf.DromicFormModule
                      ),
                      children: [
                        {
                          path: "",
                          loadChildren: () =>
                          import("./template/osca-intake-template-list/osca-intake-template-list.module").then(
                            plt => plt.OscaIntakeTemplateListModule
                          )
                        },
                        {
                          path: "dromic-registration-form/:person_guid",
                          loadChildren: () =>
                          import("./pages/social-welfare/dromic/dromic-form/dromic-form.module").then(
                            spf => spf.DromicFormModule
                          )
                        },
                        {
                          path: "dromic-registration-form",
                          loadChildren: () =>
                          import("./pages/social-welfare/dromic/dromic-form/dromic-form.module").then(
                            spf => spf.DromicFormModule
                          )
                        },
                        {
                          path: "persons-add",
                          loadChildren: () =>
                          import("./template/persons-add-template/persons-add-template.module").then(
                            pat => pat.PersonsAddTemplateModule
                          )
                        },
                      ]
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/dromic/dromic-form/dromic-form.module").then(
                        spf => spf.DromicFormModule  
                      )
                    },
                    {
                      path: "print-list",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/dromic/dromic-print-list/dromic-print-list.module").then(
                        sppl => sppl.DromicPrintListModule
                      )
                    },
                    {
                      path: "print-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/social-welfare/dromic/dromic-print-form/dromic-print-form.module").then(
                        sppf => sppf.DromicPrintFormModule
                      )
                    }
                  ]
                },
                {
                  path: "evacuation-setup",
                  component: EvacuationCenterComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/admin-console/evacuation-center/evacuation-center-list/evacuation-center-list.module").then(
                        ecl => ecl.EvacuationCenterListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/admin-console/evacuation-center/evacuation-center-form/evacuation-center-form.module").then(
                        ecf => ecf.EvacuationCenterFormModule
                      )
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/admin-console/evacuation-center/evacuation-center-form/evacuation-center-form.module").then(
                        ecf => ecf.EvacuationCenterFormModule
                      )
                    },
                    {
                      path: "print-list",

                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/admin-console/evacuation-center/evacuation-print-list/evacuation-print-list.module").then(
                        epl => epl.EvacuationPrintListModule
                      )
                    }
                  ]
                },
                {
                  path : "financial-assistance",
                  component : FinancialAssistanceComponent,
                  children : [
                    {
                      path : "",
                      loadChildren: () => import("./pages/social-welfare/financial-assistance/financial-assistance-list/financial-assistance-list.module").then(a => a.FinancialAssistanceListModule)
                    },
                    {
                      path: "print-list",
                      loadChildren: () =>
                      import("./pages/social-welfare/financial-assistance/financial-assistance-print-list/financial-assistance-print-list.module").then(
                        epl => epl.FinancialAssistancePrintListModule
                      )
                    }
                  ]
                },
              ]
          }
        ]
      },
      {
        path: "admin-console",
        component: AdminConsoleComponent,
        children: [
          {
            path: "",
            loadChildren: () =>
              import("./pages/admin-console/admin-console.module").then(
                ac => ac.AdminConsoleModule
              ),
              children: [
                {
                  path: "sequencer",
                  component: SequencerComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/admin-console/sequencer/sequencer.module").then(
                        dl => dl.SequencerModule
                      )
                    },
                  ]
                },

                {
                path: "barangay-official",
                component: BarangayOfficialComponent,
                children: [
                  {
                    path: "",
                    loadChildren: () =>
                    import("./pages/admin-console/barangay-official/barangay-official-list/barangay-official-list.module").then(
                      dl => dl.BarangayOfficialListModule
                    )
                  },
                  {
                    path: "add-form",
                    loadChildren: () =>
                    import("./pages/admin-console/barangay-official/barangay-official-form/barangay-official-form.module").then(
                      df => df.BarangayOfficialFormModule
                    )
                  },
                  {
                    path: "edit-form/:id/:brgy/:official_id",
                    loadChildren: () =>
                    import("./pages/admin-console/barangay-official/barangay-official-form/barangay-official-form.module").then(
                      df => df.BarangayOfficialFormModule
                    )
                  },
                  {
                    path: "print-list",
                    loadChildren: () =>
                    import("./pages/admin-console/barangay-official/barangay-official-print-list/barangay-official-print-list.module").then(
                      df => df.BarangayOfficialPrintListModule
                    )
                  }
                ]
              },
                {
                  path: "business",
                  component: BusinessComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/admin-console/business/business-list/business-list.module").then(
                        dl => dl.BusinessListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/admin-console/business/business-form/business-form.module").then(
                        df => df.BusinessFormModule
                      )
                    },
                    {
                      path: "edit-form/:id",
                      loadChildren: () =>
                      import("./pages/admin-console/business/business-form/business-form.module").then(
                        df => df.BusinessFormModule
                      )
                    },
                    {
                      path: "print-list",
                      loadChildren: () =>
                      import("./pages/admin-console/business/business-print-list/business-print-list.module").then(
                        df => df.BusinessPrintListModule
                      )
                    }
                  ]
                },
                {
                  path: "project-lgu",
                  component: ProjectLguComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/admin-console/project-lgu/project-lgu-list/project-lgu-list.module").then(
                        dl => dl.ProjectLguListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/admin-console/project-lgu/project-lgu-form/project-lgu-form.module").then(
                        df => df.ProjectLguFormModule
                      )
                    },
                    {
                      path: "edit-form/:id",
                      loadChildren: () =>
                      import("./pages/admin-console/project-lgu/project-lgu-form/project-lgu-form.module").then(
                        df => df.ProjectLguFormModule
                      )
                    }
                  ]
                },
                {
                  path: "domain",
                  component: DomainComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/admin-console/domain/domain-list/domain-list.module").then(
                        dl => dl.DomainListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/admin-console/domain/domain-form/domain-form.module").then(
                        df => df.DomainFormModule
                      )
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/admin-console/domain/domain-form/domain-form.module").then(
                        df => df.DomainFormModule
                      )
                    }
                  ]
                },
                {
                  path: "role-type",
                  component: RoleTypeComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/admin-console/role-type/role-type-list/role-type-list.module").then(
                        rtl => rtl.RoleTypeListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/admin-console/role-type/role-type-form/role-type-form.module").then(
                        rtf => rtf.RoleTypeFormModule
                      )
                    },
                    {
                      path: "edit-form/:id",
                      loadChildren: () =>
                      import("./pages/admin-console/role-type/role-type-form/role-type-form.module").then(
                        rtf => rtf.RoleTypeFormModule
                      )
                    }
                  ]
                },
                {
                  path: "user",
                  component: UserComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/admin-console/user/user-list/user-list.module").then(
                        ul => ul.UserListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/admin-console/user/user-form/user-form.module").then(
                        uf => uf.UserFormModule
                      )
                    },
                    {
                      path: "edit-form/:id",
                      loadChildren: () =>
                      import("./pages/admin-console/user/user-form/user-form.module").then(
                        uf => uf.UserFormModule
                      )
                    },
                  ]
                },
                {
                  path: "form",
                  component: ApplicationSetupComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/admin-console/application-setup/application-setup-list/application-setup-list.module").then(
                        asl => asl.ApplicationSetupListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/admin-console/application-setup/application-setup-form/application-setup-form.module").then(
                        asf => asf.ApplicationSetupFormModule
                      )
                    },
                    {
                      path: "edit-form/:id",
                      loadChildren: () =>
                      import("./pages/admin-console/application-setup/application-setup-form/application-setup-form.module").then(
                        asf => asf.ApplicationSetupFormModule
                      )
                    },
                  ]
                },
                {
                  path: "person",
                  component: PersonComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/admin-console/person/person-list/person-list.module").then(
                        pl => pl.PersonListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/admin-console/person/person-form/person-form.module").then(
                        pf => pf.PersonFormModule
                      )
                    },
                    {
                      path: "edit-form/:id",
                      loadChildren: () =>
                      import("./pages/admin-console/person/person-form/person-form.module").then(
                        pf => pf.PersonFormModule
                      )
                    },
                    {
                      path: "print-list",
                      loadChildren: () =>
                      import("./pages/admin-console/person/person-print-list/person-print-list.module").then(
                        ppl => ppl.PersonPrintListModule
                      )
                    },
                  ]
                },
                {
                  path: "signatory",
                  component: SignatoryComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/admin-console/signatory/signatory-list/signatory-list.module").then(
                        ul => ul.SignatoryListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/admin-console/signatory/signatory-form/signatory-form.module").then(
                        uf => uf.SignatoryFormModule
                      )
                    },
                    {
                      path: "edit-form/:id",
                      loadChildren: () =>
                      import("./pages/admin-console/signatory/signatory-form/signatory-form.module").then(
                        uf => uf.SignatoryFormModule
                      )
                    },
                  ]
                },
                {
                  path: "elected-officials",
                  component: ElectedOfficialsComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/admin-console/elected-officials/elected-officials-list/elected-officials-list.module").then(
                        ul => ul.ElectedOfficialsListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/admin-console/elected-officials/elected-officials-form/elected-officials-form.module").then(
                        uf => uf.ElectedOfficialsFormModule
                      )
                    },
                    {
                      path: "edit-form/:id",
                      loadChildren: () =>
                      import("./pages/admin-console/elected-officials/elected-officials-form/elected-officials-form.module").then(
                        uf => uf.ElectedOfficialsFormModule
                      )
                    },{
                      path: "print/:id",
                      loadChildren: () =>
                      import("./pages/admin-console/elected-officials/elected-officials-print/elected-officials-print.module").then(
                        uf => uf.ElectedOfficialsPrintModule
                      )
                    },
                  ]
                },
                {
                  path: "department",
                  component: DepartmentComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/admin-console/department/department-list/department-list.module").then(
                        ul => ul.DepartmentListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/admin-console/department/department-form/department-form.module").then(
                        uf => uf.DepartmentFormModule
                      )
                    },
                    {
                      path: "edit-form/:id",
                      loadChildren: () =>
                      import("./pages/admin-console/department/department-form/department-form.module").then(
                        uf => uf.DepartmentFormModule
                      )
                    },
                    {
                      path: "print-list",
                      loadChildren: () =>
                      import("./pages/admin-console/department/department-print-list/department-print-list.module").then(
                        ppl => ppl.DepartmentPrintListModule
                      )
                    },
                  ]
                },
                {
                  path: "evacuation-center",
                  component: EvacuationCenterComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/admin-console/evacuation-center/evacuation-center-list/evacuation-center-list.module").then(
                        ecl => ecl.EvacuationCenterListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/admin-console/evacuation-center/evacuation-center-form/evacuation-center-form.module").then(
                        ecf => ecf.EvacuationCenterFormModule
                      )
                    },
                    {
                      path: "edit-form/:id",
                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/admin-console/evacuation-center/evacuation-center-form/evacuation-center-form.module").then(
                        ecf => ecf.EvacuationCenterFormModule
                      )
                    },
                    {
                      path: "print-list",

                      data: {id: ""},
                      loadChildren: () =>
                      import("./pages/admin-console/evacuation-center/evacuation-print-list/evacuation-print-list.module").then(
                        epl => epl.EvacuationPrintListModule
                      )
                    }
                  ]
                },
                {
                  path: "fees-charges",
                  component: FeesChargesComponent,
                  children: [
                    {
                      path: "",
                      loadChildren: () =>
                      import("./pages/admin-console/fees-charges/fees-charges-list/fees-charges-list.module").then(
                        ul => ul.FeesChargesListModule
                      )
                    },
                    {
                      path: "add-form",
                      loadChildren: () =>
                      import("./pages/admin-console/fees-charges/fees-charges-form/fees-charges-form.module").then(
                        uf => uf.FeesChargesFormModule
                      )
                    },
                    {
                      path: "edit-form/:id",
                      loadChildren: () =>
                      import("./pages/admin-console/fees-charges/fees-charges-form/fees-charges-form.module").then(
                        uf => uf.FeesChargesFormModule
                      )
                    },
                    {
                      path: "print-list",

                      loadChildren: () =>
                      import("./pages/admin-console/fees-charges/fees-charges-print/fees-charges-print.module").then(
                        ppl => ppl.FeesChargesPrintModule
                      )
                    },
                  ]
                }
              ]
          },

        ]
      },
      {
        path: "",
        redirectTo: "/main/executive-dashboard",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/main/executive-dashboard",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
