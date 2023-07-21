import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppliedJobService } from '../service/appiled-job.service';
export interface AppliedJobs {
  id:number;
  
  name: string;
  email: string;
  job: string;
}
@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})
export class AppliedJobsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email','job-title'];
  // dataSource = ELEMENT_DATA;
  listJobs:AppliedJobs[]=[];
  
  constructor(private appliedJobService:AppliedJobService) { }

  ngOnInit(): void 
  {
    this.getListJobs();
   
  }
  private getListJobs()
  {
    this.appliedJobService.listJobs().subscribe((data: AppliedJobs[]) =>{
      this.listJobs=data;
    })
  }

}
