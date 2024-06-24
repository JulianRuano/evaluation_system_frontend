import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AlertService } from '../../services/helpers/alerts/alert.service';
import { JsonPipe, NgFor } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private  authService: AuthService,
    private alertService:AlertService,
    private router: Router
    ) { }

  onSubmit() {
    //validar con loginForm
    if (this.loginForm.invalid) {
      this.alertService.showAlertError("Error en el formulario");
      return;
    }


    this.authService.login(this.loginForm.value).subscribe({
      next: (data:any) => {

        this.authService.setToken(data.token);
        this.authService.getCurrentUser().subscribe({
          //llega el usuario
          next: (data:any) => {
            this.authService.setUserData(data);
            //vericicamos el rol del usuario
            let roles = data.authorities.map((role:any) => role.authority);
            if (roles.includes('admin')) {
              this.router.navigate(['/admin']);
              this.authService.loginStatus.next(true);
            } else if (roles.includes('user')) {
              this.router.navigate(['/user']);
              this.authService.loginStatus.next(true);
            }
            else {
              this.router.navigate(['/login']);
            }

          },
          error: error => this.alertService.showAlertError("Error al obtener el usuario")
        }
        );
    },
      error: error => this.alertService.showAlertError("Error al loguear el usuario")
    }
    );
    this.loginForm.reset();
  }

}
