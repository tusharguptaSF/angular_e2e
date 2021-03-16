import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { EditOpenerComponent } from './components/edit-opener/edit-opener.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component : SignupComponent
  },
  {
    path:"home",
    component: DashboardComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:"contact/edit/:contactID",
        component : EditOpenerComponent,
        outlet:"editoutlet"
      }
    ]
  },
  {
    path:"",
    redirectTo:"/login",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
