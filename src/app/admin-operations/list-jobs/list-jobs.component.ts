import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
    
export interface JobPosts {
  id:number;
  
  name: string;
  email: string;
  job: string;
}
@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email','job-title', 'Actions'];
  // dataSource = ELEMENT_DATA;
  listJobs:JobPosts[]=[];
  
  constructor(private adminService:AdminService) { }

  ngOnInit(): void 
  {
    this.getListJobs();
   
  }
  private getListJobs()
  {
    this.adminService.listJobs().subscribe(data =>{
      this.listJobs=data;
    })
  }

}
