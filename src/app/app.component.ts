import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from './pages/auth/components/signup/signup.component';
import { LoginComponent } from './pages/auth/components/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { NavSidebarComponent } from './pages/nav-sidebar/nav-sidebar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, NavSidebarComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'evaluation_system_frontend';
}
