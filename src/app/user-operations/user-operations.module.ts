import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllJobsComponent } from './all-jobs/all-jobs.component';

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
import { AllAppliedJobsComponent } from './all-aplied-jobs/all-aplied-jobs.component';



@NgModule({
  declarations: [
    AllJobsComponent,
    AllAppliedJobsComponent
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
  ],
  exports:[AllJobsComponent,AllAppliedJobsComponent]
})
export class UserOperationsModule { }
