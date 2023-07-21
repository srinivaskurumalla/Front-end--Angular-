import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { AddJobComponent } from './add-job/add-job.component';

import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { DeleteJobComponent } from './delete-job/delete-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';


@NgModule({
  declarations: [
    ListJobsComponent,
    AddJobComponent,
    DeleteJobComponent,
    EditJobComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule
  ], providers:[
    {provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue:{duration:2000}}
  ],
  exports:[ListJobsComponent,AddJobComponent]
})
export class AdminOperationsModule { }
