import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgZorroModule } from 'src/core/third-party/ng-zorro';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { DatePipe, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundPageComponent } from 'src/core/core-page/not-found-page/not-found-page.component';
import { UnauthorizedComponent } from 'src/core/core-page/unauthorized/unauthorized.component';
import { MycurrencyPipe } from 'src/core/pipe/custom.currencypipe';

registerLocaleData(en);

@NgModule({
  declarations: [	
    AppComponent,
    NotFoundPageComponent,
    UnauthorizedComponent,
    MycurrencyPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
