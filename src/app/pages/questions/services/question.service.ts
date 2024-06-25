import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  public saveQuestion(question: any) {
    console.log(question);
    return this.http.post(`${environment.baseUrl}/question/`, question);
  }

  //Todas la preguntas con paginacion usando en el backend spring boot Pageable
  public getAllQuestions(page: number, size: number) {
    return this.http.get(`${environment.baseUrl}/question/?page=${page}&size=${size}`);
  }

  public getQuestionById(id: number) {
    return this.http.get(`${environment.baseUrl}/question/${id}`);
  }

  public updateQuestion(id: number, question: any) {
    console.log(question);
    return this.http.put(`${environment.baseUrl}/question/${id}`, question);
  }

  public deleteQuestion(id: number) {
    return this.http.delete(`${environment.baseUrl}/question/${id}`);
  }
}
