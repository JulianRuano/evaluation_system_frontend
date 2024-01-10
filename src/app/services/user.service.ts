import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from './helpers/API_URL';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public saveUser(user: any) {
    return this.http.post(`${API_URL}/user/`, user);
  }
}
