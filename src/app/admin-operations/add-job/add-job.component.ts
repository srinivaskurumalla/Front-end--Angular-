import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {
  addUserForm:FormGroup=new FormGroup({})
  
  constructor(private formBuilder:FormBuilder,
    private adminService :AdminService,
    private _snackBar: MatSnackBar,
    private router : Router) { }

  ngOnInit(): void 
  {
   this.addUserForm = this.formBuilder.group(
      {
        'name' : new FormControl('',[Validators.required,Validators.minLength(3)]),
        'email' : new FormControl('',[Validators.required,Validators.email]),
        'job' : new FormControl('',[Validators.required])
      }
    )
  }

  createUser()
  {
    this.adminService.addJob(this.addUserForm.value).subscribe(data =>
      {
        this._snackBar.open('Job added successfully')
        this.router.navigate(['list'])
      },err =>
      {
        this._snackBar.open('unable to add Job')
      })
  }

}
