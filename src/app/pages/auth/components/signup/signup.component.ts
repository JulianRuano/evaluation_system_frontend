import { JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from '../../../user/services/user.service';
import { AlertService } from '../../../../shared/alerts/alert.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, JsonPipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signupForm = this.formBuilder.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    cellPhone: ['', Validators.required],
  });


  constructor(private formBuilder: FormBuilder, private  userService: UserService, private alertService:AlertService) { }

  onSubmit() {
    //validar con signupForm
    if (this.signupForm.invalid) {
      this.alertService.showAlertError("Error en el formulario");
      return;
    }

    this.userService.saveUser(this.signupForm.value).subscribe({
      next: data => alert(JSON.stringify(data)),
      error: error => this.alertService.showAlertError(error.error.message),
    }
    );
    this.signupForm.reset();
  }
}
