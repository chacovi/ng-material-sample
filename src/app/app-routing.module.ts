import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './pages/home/homepage/homepage.component'
import { DashboardComponent } from './pages/home/dashboard/dashboard.component'
import { LoginComponent } from './pages/auth/login/login.component'

import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
