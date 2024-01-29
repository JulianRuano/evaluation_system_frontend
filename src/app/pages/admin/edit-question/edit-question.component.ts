import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-question',
  standalone: true,
  imports: [],
  templateUrl: './edit-question.component.html',
  styleUrl: './edit-question.component.css'
})
export class EditQuestionComponent {

  id: number = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute) {}




}
