import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { NameLastnamePipe } from './pipes/name-lastname.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { StudentFilterPipe } from './pipes/student-filter.pipe';




@NgModule({
  declarations: [ ],

  exports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatInputModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    MatTableModule,
    RouterModule,
  
    MatToolbarModule,
    MatSnackBarModule,
    MatSlideToggleModule,
  
    MatExpansionModule
  ]
})
export class SharedModule { }
