import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { permissionsGuard } from './services/helpers/guard/permissions.guard';

export const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Signup',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: DashboardComponent,
    title: 'admin',
    pathMatch: 'full',
    canActivate: [permissionsGuard]
  },
  {
    path: 'user',
    component: UserDashboardComponent,
    title: 'admin',
    pathMatch: 'full',
    canActivate: [permissionsGuard]
  }
];
