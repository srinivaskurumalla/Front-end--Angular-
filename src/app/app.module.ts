import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { AdminOperationsModule } from './admin-operations/admin-operations.module';
import { LayoutModule } from './layout/layout.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { DummyComponent } from './dummy/dummy.component';
import { UserOperationsModule } from './user-operations/user-operations.module';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import {MatCardModule} from '@angular/material/card';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    DummyComponent,
    AppliedJobsComponent,
    UserInterfaceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatListModule,
    HttpClientModule,
    AdminOperationsModule,
    MatTableModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    UserOperationsModule,
    MatCardModule,
    MatGridListModule
    
   
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
