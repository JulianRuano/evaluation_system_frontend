import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public saveUser(user: any) {
    return this.http.post(`${environment.baseUrl}/auth/register`, user);
  }
}
