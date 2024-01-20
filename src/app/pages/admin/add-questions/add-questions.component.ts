import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { JsonPipe, NgFor } from '@angular/common';
import { NavSidebarComponent } from '../nav-sidebar/nav-sidebar.component';


@Component({
  selector: 'app-add-questions',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, JsonPipe,NavSidebarComponent],
  templateUrl: './add-questions.component.html',
  styleUrl: './add-questions.component.css'
})
export class AddQuestionsComponent {

  dataForm = this.formBuilder.group({
    question: ['', Validators.required],
    answer1: ['', Validators.required],
    answer2: ['', Validators.required],
    answer3: ['', Validators.required],
    answer4: ['', Validators.required],
    level:  ['', Validators.required,],
    category: ['', Validators.required],
    status: ['', Validators.required],
    correctAnswer: ['', Validators.required],
  });


  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    //validar con dataForm
    if (this.dataForm.invalid) {
      console.log("Error en el formulario");
      return;
    }
    console.log(this.dataForm.value);

  }



}
