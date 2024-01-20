import { Component } from '@angular/core';
import { NavSidebarComponent } from '../nav-sidebar/nav-sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NavSidebarComponent, CommonModule],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent {
createQuestion() {
throw new Error('Method not implemented.');
}
  questions: any[] = [
    {
      id: 1,
      question: 'What is the capital of the United States?',
      answer: 'Washington D.C.',
      category: 'Geography',
      level: 'Easy',
      status: 'Active'
    },
    {
      id: 2,
      question: 'What is the capital of the United States?',
      answer: 'Washington D.C.',
      category: 'Geography',
      level: 'Easy',
      status: 'Active'
    },
    {
      id: 3,
      question: 'What is the capital of the United States?',
      answer: 'Washington D.C.',
      category: 'Geography',
      level: 'Easy',
      status: 'Active'
    },
    {
      id: 4,
      question: 'What is the capital of the United States?',
      answer: 'Washington D.C.',
      category: 'Geography',
      level: 'Easy',
      status: 'Active'
    },
    {
      id: 5,
      question: 'What is the capital of the United States?',
      answer: 'Washington D.C.',
      category: 'Geography',
      level: 'Easy',
      status: 'Active'
    },
    {
      id: 6,
      question: 'What is the capital of the United States?',
      answer: 'Washington D.C.',
      category: 'Geography',
      level: 'Easy',
      status: 'Active'
    },
    {
      id: 7,
      question: 'What is the capital of the United States?',
      answer: 'Washington D.C.',
      category: 'Geography',
      level: 'Easy',
      status: 'Active'
    },
    {
      id: 8,
      question: 'What is the capital of the United States?',
      answer: 'Washington D.C.',
      category: 'Geography',
      level: 'Easy',
      status: 'Active'
    }


  ];

  editQuestion(arg0: any) {
    throw new Error('Method not implemented.');
  }
  deleteQuestion(arg0: any) {
    throw new Error('Method not implemented.');
  }

}
