import { Component, OnInit } from '@angular/core';
import { AppliedJobService } from 'src/app/service/appiled-job.service';    
export interface JobPosts {
  id:number;
  
  name: string;
  email: string;
  job: string;
}
@Component({
  selector: 'app-all-aplied-jobs',
  templateUrl: './all-aplied-jobs.component.html',
  styleUrls: ['./all-aplied-jobs.component.css']
})
export class AllAppliedJobsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email','job-title'];
  // dataSource = ELEMENT_DATA;
  listJobs:JobPosts[]=[];
  
  constructor(private appliedJobService:AppliedJobService) { }

  ngOnInit(): void 
  {
    this.getAppliedJobs();
   
  }
  private getAppliedJobs()
  {
    this.appliedJobService.listJobs().subscribe(data =>{
      this.listJobs=data;
    })
  }

}
