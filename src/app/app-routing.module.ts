import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/dashboard/pages/home/home.component';
import { StudentsComponent } from './modules/dashboard/pages/students/students.component';

const routes: Routes = [
 
    {
      path: "dashboard",
      loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    { path: "", redirectTo: "dashboard", pathMatch: "full" }, // Redirige al dashboard
    { path: "**", redirectTo: "dashboard" } // Captura rutas inválidas
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
