import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobComponent } from './admin-operations/add-job/add-job.component';
import { DeleteJobComponent } from './admin-operations/delete-job/delete-job.component';
import { EditJobComponent } from './admin-operations/edit-job/edit-job.component';
import { ListJobsComponent } from './admin-operations/list-jobs/list-jobs.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { DummyComponent } from './dummy/dummy.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { AllAppliedJobsComponent } from './user-operations/all-aplied-jobs/all-aplied-jobs.component';
import { AllJobsComponent } from './user-operations/all-jobs/all-jobs.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path: 'avai', component: UserDashboardComponent},
  {path:'listJobs',component:DummyComponent},
  {path: 'admin', component:AdminDashboardComponent},
  {path:'list',component:ListJobsComponent},
  {path:'create',component:AddJobComponent},
  {path:'userinterface',component:UserInterfaceComponent},
  {path:'view/:id',component:AppliedJobsComponent},
  {path:'delete/:id',component:DeleteJobComponent},
  {path:'edit/:id',component:EditJobComponent},
  {path:'view',component:AppliedJobsComponent},
  {path:'AllJobs',component:AllJobsComponent},
  {path:'AppliedJobs',component:AllAppliedJobsComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
