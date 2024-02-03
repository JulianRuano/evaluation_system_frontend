import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../helpers/API_URL';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public saveCategory(category: any) {
    return this.http.post(`${API_URL}/category/`, category);
  }

  public getAllCategories(page: number, size: number) {
    return this.http.get(`${API_URL}/category/?page=${page}&size=${size}`);
  }

  public getCategoryById(id: number) {
    return this.http.get(`${API_URL}/category/${id}`);
  }

  public updateCategory(id: number, category: any) {
    return this.http.put(`${API_URL}/category/${id}`, category);
  }

  public deleteCategory(id: number) {
    return this.http.delete(`${API_URL}/category/${id}`);
  }
}
