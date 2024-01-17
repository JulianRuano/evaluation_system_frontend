import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public authService: AuthService) { }

  public logout() {
    this.authService.logout();
    window.location.reload();
  }

}
