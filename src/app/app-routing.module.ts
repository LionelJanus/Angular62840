import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/dashboard/pages/home/home.component';
import { StudentsComponent } from './modules/dashboard/pages/students/students.component';

const routes: Routes = [
  
  {path:"dashboard",
    loadChildren: () => import ('./modules/dashboard/dashboard.module').then((m)=>m.DashboardModule),
    component:DashboardComponent
  },
  {path:"home",
    loadChildren: () => import ('./modules/dashboard/pages/home/home.module').then((m)=>m.HomeModule),
    component:HomeComponent
  },
  {path:"students",
    loadChildren: () => import ('./modules/dashboard/pages/students/students.module').then((m)=>m.StudentsModule),
    component:StudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
