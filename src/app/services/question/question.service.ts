import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../helpers/API_URL';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  public saveQuestion(question: any) {
    return this.http.post(`${API_URL}/question/`, question);
  }

  //Todas la preguntas con paginacion usando en el backend spring boot Pageable
  public getAllQuestions(page: number, size: number) {
    return this.http.get(`${API_URL}/question/?page=${page}&size=${size}`);
  }

  public getQuestionById(id: number) {
    return this.http.get(`${API_URL}/question/${id}`);
  }

  public updateQuestion(id: number, question: any) {
    return this.http.put(`${API_URL}/question/${id}`, question);
  }

  public deleteQuestion(id: number) {
    return this.http.delete(`${API_URL}/question/${id}`);
  }
}
