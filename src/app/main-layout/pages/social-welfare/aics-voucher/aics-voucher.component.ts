import { Component, OnInit } from '@angular/core';
import { AicsVoucherService } from 'src/core/services/aics-voucher/aics-voucher.service';

@Component({
  selector: 'app-aics-voucher',
  templateUrl: './aics-voucher.component.html',
  styleUrls: ['./aics-voucher.component.scss']
})
export class AicsVoucherComponent implements OnInit {

  isLoaded = false

  listURL = "/main/social-welfare/aics-voucher"
  addURL = "/main/social-welfare/aics-voucher/add-form"
  editURL = "/main/social-welfare/aics-voucher/edit-form"
  printListURL = "/main/social-welfare/aics-voucher/print-list"

  formSettings: any = []

  constructor(
    private aicsVoucherService: AicsVoucherService
  ) { }

  ngOnInit() {
    this.aicsVoucherService.getAicsVoucher().subscribe(data => {
      this.formSettings = data[1]

      this.isLoaded = true
    })
  }

}
