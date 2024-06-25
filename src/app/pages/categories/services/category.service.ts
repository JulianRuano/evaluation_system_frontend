import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public saveCategory(category: any) {
    return this.http.post(`${environment.baseUrl}/category/`, category);
  }

  public getAllCategories(page: number, size: number) {
    return this.http.get(`${environment.baseUrl}/category/?page=${page}&size=${size}`);
  }

  public getCategoryById(id: number) {
    return this.http.get(`${environment.baseUrl}/category/${id}`);
  }

  public updateCategory(id: number, category: any) {
    return this.http.put(`${environment.baseUrl}/category/${id}`, category);
  }

  public deleteCategory(id: number) {
    return this.http.delete(`${environment.baseUrl}/category/${id}`);
  }
}
