import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { JsonPipe, NgFor } from '@angular/common';
import { NavSidebarComponent } from '../nav-sidebar/nav-sidebar.component';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question/question.service';


@Component({
  selector: 'app-save-edit-questions',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, JsonPipe,NavSidebarComponent],
  templateUrl: './save-edit-questions.component.html',
  styleUrl: './save-edit-questions.component.css'
})
export class SaveEditQuestionsComponent {
  id: number = this.route.snapshot.params['id'];
  isEdit: boolean = false;


  dataForm = this.formBuilder.group({
    question: ['', Validators.required],
    answerA: ['', Validators.required],
    answerB: ['', Validators.required],
    answerC: ['', Validators.required],
    answerD: ['', Validators.required],
    level:  ['', Validators.required,],
    category: ['', Validators.required],
    status: ['', Validators.required],
    correctAnswer: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private questionService: QuestionService,
  ) { }

  ngOnInit(): void {
    if (this.id != null) {
      this.isEdit = true;
      this.loadQuestion();
    }
  }

  onSubmit() {
    //validar con dataForm
    if (this.dataForm.invalid) {
      console.log("Error en el formulario");
      return;
    }

    if (this.isEdit) {
      this.updateQuestion();
    } else {
      this.saveQuestion();
    }
  }

  saveQuestion() {
    //validar con dataForm
    if (this.dataForm.invalid) {
      console.log("Error en el formulario");
      return;
    }
    this.questionService.saveQuestion(this.dataForm.value).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  updateQuestion() {
    //validar con dataForm
    if (this.dataForm.invalid) {
      console.log("Error en el formulario");
      return;
    }
    this.questionService.updateQuestion(this.id, this.dataForm.value).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  loadQuestion() {
    this.questionService.getQuestionById(this.id).subscribe({
      next: (data:any) => {
        this.dataForm.setValue({
          question: data.question,
          answerA: data.answerA,
          answerB: data.answerB,
          answerC: data.answerC,
          answerD: data.answerD,
          level: data.level,
          category: data.category,
          status: data.status,
          correctAnswer: data.correctAnswer,
        });

      },
      error: error => {
        console.log(error);
      }
    });
  }



}
