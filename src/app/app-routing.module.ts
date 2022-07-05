import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CreateAddGuardService } from './create-app-can-deactivate-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  //{path:'login',component:LoginComponent,canDeactivate:[CreateAddGuardService]},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'service',component:ServicesComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
