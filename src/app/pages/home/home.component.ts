import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavSidebarComponent } from '../admin/nav-sidebar/nav-sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, NavSidebarComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
