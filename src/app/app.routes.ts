import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { permissionsGuard } from './services/helpers/guard/permissions.guard';
import { NavSidebarComponent } from './pages/admin/nav-sidebar/nav-sidebar.component';
import { SaveEditQuestionsComponent } from './pages/admin/save-edit-questions/save-edit-questions.component';
import { QuestionsComponent } from './pages/admin/questions/questions.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { SaveEditCategoryComponent } from './pages/admin/save-edit-category/save-edit-category.component';

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
