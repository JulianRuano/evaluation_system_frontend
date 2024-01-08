import { JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

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


  constructor(private formBuilder: FormBuilder, private  userService: UserService) { }

  onSubmit() {
    //validar con signupForm
    if (this.signupForm.invalid) {
      alert('invalid form');
      return;
    }

    this.userService.saveUser(this.signupForm.value).subscribe({
      next: data => alert(JSON.stringify(data)),
      error: error => console.error(error)
    }
    );
    this.signupForm.reset();
  }
}
