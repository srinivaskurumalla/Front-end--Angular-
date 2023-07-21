import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobPosts } from '../admin-operations/list-jobs/list-jobs.component';
import { AppliedJobs } from '../applied-jobs/applied-jobs.component';
@Injectable({
  providedIn: 'root'
})
export class AppliedJobService {
  
 // private baseURL="http://b116team7onlinejobportal-env.eba-afv23ctu.ca-central-1.elasticbeanstalk.com/appliedJobs";
 // private baseURL="http://3.99.214.16:8080/appliedJobs";
  private baseURL="http://localhost:8080/appliedJobs";

  constructor(private http:HttpClient) { }

  listJobs():Observable<AppliedJobs[]>
  {
   return this.http.get<AppliedJobs[]>(`${this.baseURL}/${"getAllAppliedJobs"}`);
  }

  addJob(userObj:Object)
  {
    return this.http.post(`${this.baseURL}/${"appliedJob"}`,userObj)  
  }
  viewJobs(id:number):Observable<AppliedJobs[]>
  {
    return this.http.get<AppliedJobs[]>(`${this.baseURL}/${"getJob"}/${id}` )
  }
  
}
