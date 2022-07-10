import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from '../appComponent/app.component';
import { LoginRoutingModule, loginComponents } from '../login/login-routes/login.routing.module';
import { SharedRoutingModule, sharedComponents } from '../shared/shared-routes/shared.routing.module';
import { AdminRoutingModule, adminComponents } from '../admin/admin-routes/admin.routing.module';
import { OtherRoutingModule, otherComponents } from '../other/other-routes/other.routing.module';

@NgModule({
  declarations: [
    AppComponent, loginComponents, adminComponents, otherComponents, sharedComponents
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
    OtherRoutingModule,
    SharedRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
    
  ]
})
export class AppModule { }
