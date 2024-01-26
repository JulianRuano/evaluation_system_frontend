import { Component } from '@angular/core';
import { NavSidebarComponent } from '../nav-sidebar/nav-sidebar.component';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../../../services/question/question.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NavSidebarComponent, CommonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {

  constructor(private questionService: QuestionService) { }

  questions: any[] = [];
  size: number = 10;
  page: number = 0;
  totalPages: number = 0;
  totalElements: number = 0;
  totalPagesArray: number[] = [];

  getAllQuestions() {
    this.questionService.getAllQuestions(this.page, this.size).subscribe(
      (data: any) =>{
        this.questions = data.content;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
        this.totalPagesArray = new Array<number>(this.totalPages);
      },
      err => {
        console.log(err);
      }
    );
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
    throw new Error('Method not implemented.');
  }

  editQuestion(arg0: any) {
    throw new Error('Method not implemented.');
  }
  deleteQuestion(arg0: any) {
    throw new Error('Method not implemented.');
  }

}
