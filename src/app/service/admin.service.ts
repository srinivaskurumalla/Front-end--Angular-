import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobPosts } from '../admin-operations/list-jobs/list-jobs.component';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  //private baseURL="http://b116team7onlinejobportal-env.eba-afv23ctu.ca-central-1.elasticbeanstalk.com/admin";
   //private baseURL="http://3.99.214.16:8080/admin";
   private baseURL="http://localhost:8080/admin";

  constructor(private http:HttpClient) { }

  listJobs():Observable<JobPosts[]>
  {
   return this.http.get<JobPosts[]>(`${this.baseURL}/${"getAllJobs"}`);
  }

  addJob(userObj:Object)
  {
    return this.http.post(`${this.baseURL}/${"postJob"}`,userObj)  
  }
  viewJobs(id:number):Observable<JobPosts[]>
  {
    return this.http.get<JobPosts[]>(`${this.baseURL}/${"getJob"}/${id}` )
  }
  deleteJob(id:any)
  {
    return this.http.delete(`${this.baseURL}/${"deleteJob"}/${id}`) 
  }
}
