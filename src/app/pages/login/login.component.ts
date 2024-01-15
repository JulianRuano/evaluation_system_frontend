import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AlertService } from '../../services/helpers/alerts/alert.service';
import { JsonPipe, NgFor } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';



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

  constructor(private formBuilder: FormBuilder, private  authService: AuthService, private alertService:AlertService) { }

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
          next: (data:any) => {
            this.authService.setUserData(data);
            this.alertService.showAlertSuccess("Usuario logueado correctamente");
          },
          error: error => this.alertService.showAlertError("Error al obtener el usuario")
        }
        );
    },
      error: error => console.error(error)
    }
    );
    this.loginForm.reset();
  }

}
