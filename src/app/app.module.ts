import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToolbarComponent } from './modules/dashboard/components/toolbar/toolbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';  
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './modules/dashboard/pages/home/home.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderFontSizeDirective } from './shared/directives/header-font-size.directive';
import { NavmenuComponent } from './modules/dashboard/components/navmenu/navmenu.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { StudentsModule } from './modules/dashboard/pages/students/students.module';
import { AppRoutingModule } from './app-routing.module';






@NgModule({
  declarations: [
    AppComponent,
    HeaderFontSizeDirective,
    NavmenuComponent,
    ToolbarComponent
    
  ],

  imports: [
    BrowserModule,
    MatSidenavModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    FormsModule,
    MatDialogModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatExpansionModule,
    AppRoutingModule
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
