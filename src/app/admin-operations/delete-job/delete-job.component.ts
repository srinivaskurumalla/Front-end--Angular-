import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
@Component({
  selector: 'app-delete-job',
  templateUrl: './delete-job.component.html',
  styleUrls: ['./delete-job.component.css']
})
export class DeleteJobComponent implements OnInit {
  userID:any
  constructor(private activatedRoute:ActivatedRoute,private adminService:AdminService,private _snackBar:MatSnackBar,private router:Router) { }

  ngOnInit(): void 
  {
    this.activatedRoute.params.subscribe(data =>
      {
        this.userID=data['id']
      })

    if(this.userID)
    {
      this.adminService.deleteJob(this.userID).subscribe(data =>
        {
          this._snackBar.open('user deleted successfully')
          this.router.navigate(['list'])
        },err =>
        {
          this._snackBar.open('unable to delete')
        })
    }
  }

}
