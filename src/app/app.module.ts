import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
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
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './modules/dashboard/pages/home/home.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StudentFilterPipe } from './shared/pipes/student-filter.pipe';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { NameLastnamePipe } from './shared/pipes/name-lastname.pipe';
import { HeaderFontSizeDirective } from './shared/directives/header-font-size.directive';
import { NavmenuComponent } from './modules/dashboard/components/navmenu/navmenu.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { StudentsModule } from './modules/dashboard/pages/students/students.module';






@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    HeaderFontSizeDirective,
    NavmenuComponent,
  
    
    
  ],

  imports: [
    StudentsModule
    
   
    
   
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
