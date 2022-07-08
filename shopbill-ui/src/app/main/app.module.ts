import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { MyHttpInterceptor } from '../shared/httpInterceptor/myHttpInterceptor'

import { AppComponent } from '../appComponent/app.component';
import { LoginRoutingModule, loginComponents } from '../login/login-routes/login.routing.module';
import { AdminRoutingModule, adminComponents } from '../admin/admin-routes/admin.routing.module';
import { OwnerRoutingModule, ownerComponents } from '../owner/owner-routes/owner.routing.module';

@NgModule({
  declarations: [
    AppComponent, loginComponents, adminComponents, ownerComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    NgbModule, 
    NgbPaginationModule,
    NgbAlertModule,
    LoginRoutingModule,
    AdminRoutingModule,
    OwnerRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true }
  ]
})
export class AppModule { }
