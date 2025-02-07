import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { StudentsDetailComponent } from './pages/student-detail/students-detail.component';
import { NameLastnamePipe } from '../../../../shared/pipes/name-lastname.pipe';
import { MatExpansionModule } from '@angular/material/expansion';
import { HighlightDirective } from '../../../../shared/directives/highlight.directive';
import { AppRoutingModule } from '../../../../app-routing.module';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDetailComponent,
    NameLastnamePipe,
    HighlightDirective,
    
    
   
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatExpansionModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class StudentsModule { }
