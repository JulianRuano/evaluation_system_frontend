import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { permissionsGuard } from './services/helpers/guard/permissions.guard';
import { NavSidebarComponent } from './pages/admin/nav-sidebar/nav-sidebar.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';

export const routes: Routes = [
  {
    path: '',
    component: NavSidebarComponent,
    title: 'test',
    pathMatch: 'full',
  },
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
    component: UserDashboardComponent,
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
  },
  {
    path: 'questions',
    component: AddQuestionsComponent,
    title: 'questions',
    pathMatch: 'full'
  }
];
