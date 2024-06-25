import { Routes } from '@angular/router';
import { SignupComponent } from './pages/auth/components/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/components/login/login.component';
import { UserDashboardComponent } from './pages/user/components/user-dashboard/user-dashboard.component';
import { permissionsGuard } from './core/guard/permissions.guard';
import { NavSidebarComponent } from './pages/nav-sidebar/nav-sidebar.component';
import { SaveEditQuestionsComponent } from './pages/questions/components/save-edit-questions/save-edit-questions.component';
import { QuestionsComponent } from './pages/questions/components/list-questions/questions.component';
import { CategoriesComponent } from './pages/categories/components/list-categories/categories.component';
import { SaveEditCategoryComponent } from './pages/categories/components/save-edit-category/save-edit-category.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
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
    component: QuestionsComponent,
    title: 'questions',
    pathMatch: 'full',
    canActivate: [permissionsGuard]
  },
  {
    path: 'addquestions',
    component: SaveEditQuestionsComponent,
    title: 'Add Questions',
    pathMatch: 'full',
    canActivate: [permissionsGuard]
  },
  {
    path: 'addquestions/:id',
    component: SaveEditQuestionsComponent,
    title:'Edit Questions',
    pathMatch: 'full',
    canActivate: [permissionsGuard]
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    title: 'Categories',
    pathMatch: 'full',
    canActivate: [permissionsGuard]
  },
  {
    path: 'addcategory',
    component: SaveEditCategoryComponent,
    title: 'Add Categories',
    pathMatch: 'full',
    canActivate: [permissionsGuard]
  },
  {
    path: 'addcategory/:id',
    component: SaveEditCategoryComponent,
    title: 'Edit Categories',
    pathMatch: 'full',
    canActivate: [permissionsGuard]
  },
];
