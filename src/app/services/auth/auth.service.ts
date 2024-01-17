import { Injectable } from '@angular/core';
import { API_URL } from '../helpers/API_URL';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public loginStatus = new Subject<boolean>();

  public login(user: any) {
    return this.http.post(`${API_URL}/auth/login`, user);
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

  // Obtenemos el rol del usuario
  public getUserRole() {
    const user = this.getUserData();
    return user.authorities[0].authority;
  }


  // Obtenemos el nombre del usuario
  public getCurrentUser() {
    return this.http.get(`${API_URL}/auth/getCurrentUser`, {} );
  }


}
