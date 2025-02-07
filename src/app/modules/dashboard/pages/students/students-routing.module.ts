import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { StudentsDetailComponent } from './pages/student-detail/students-detail.component';
import { HomeComponent } from '../home/home.component';

// La ruta base actual es "/dashboard/students"

const routes: Routes = [
  
    // El path conformado es /dashboard/students/ID
    {path:"students",
      loadChildren: () => import ('../students/students.module').then((m)=>m.StudentsModule),
      component:StudentsComponent
    },

    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsRoutingModule {}