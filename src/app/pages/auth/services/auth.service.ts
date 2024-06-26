import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public loginStatus = new Subject<boolean>();

  public login(user: any) {
    return this.http.post(`${environment.baseUrl}/auth/login`, user);
  }

  // Guardamos el token en el localStorage
  public setToken(token: string) {
    localStorage.setItem('token', token);
  }

  // Obtenemos el token del localStorage
  public getToken() {
    return localStorage.getItem('token');
  }

  // Comprobamos si existe el token en el localStorage
  public isLogged() {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }

  // Eliminamos el token
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  // Obtenemos el usuario
  public setUserData(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Obtenemos el usuario
  public getUserData() {
    const user = localStorage.getItem('user');
    if(user != null) {
      return JSON.parse(user);
    } else {
      this.logout();
      return null;
    }
  }

  // Obtenemos el usuario actual
  public getCurrentUser() {
    return this.http.get(`${environment.baseUrl}/auth/getCurrentUser`);
  }


}
