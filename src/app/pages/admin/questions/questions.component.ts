import { Component } from '@angular/core';
import { NavSidebarComponent } from '../nav-sidebar/nav-sidebar.component';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../../../services/question/question.service';
import { Router } from '@angular/router';
import { AlertService } from '../../../services/helpers/alerts/alert.service';


@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NavSidebarComponent, CommonModule],
  templateUrl: './questions.component.html',
  styleUrls:  ['./questions.component.css', '../../../../assets/styles/table.css']
})
export class QuestionsComponent {

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private alertService: AlertService
    ) { }

  questions: any[] = [];
  size: number = 10;
  page: number = 0;
  totalPages: number = 0;
  totalElements: number = 0;
  totalPagesArray: number[] = [];

  getAllQuestions() {
    this.questionService.getAllQuestions(this.page, this.size).subscribe({
      next: (data: any) => {
        console.log(data);
        this.questions = data.content;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
        this.totalPagesArray = new Array<number>(this.totalPages);
      },
      error: error => console.log(error)
    });
  }

  nextPage() {
    if (this.page < this.totalPages - 1){
      this.page++;
      this.getAllQuestions();
    }
  }

  changePage(i: number) {
    this.page = i;
    this.getAllQuestions();
  }

  previousPage() {
    if (this.page > 0){
      this.page--;
      this.getAllQuestions();
    }
  }


  ngOnInit() {
    this.getAllQuestions();
  }

  createQuestion() {
    this.router.navigate(['/addquestions']);
  }

  editQuestion(id: number) {
    this.router.navigate(['/addquestions', id]);
  }
  deleteQuestion(id: number) {
      this.questionService.deleteQuestion(id).subscribe({
        next: (data:any) => {
          this.questionService.deleteQuestion(id);
          this.getAllQuestions();
          this.alertService.showAlertSuccess('Pregunta eliminada correctamente');
        },
        error: error => console.log(error)
      });
  }

}
