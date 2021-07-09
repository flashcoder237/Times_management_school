import { Token } from './../types/token';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = environment.api
  private tokens: Token = { access: '', refresh: '' }
  private isAuth$ = new BehaviorSubject<boolean>(false)

  constructor(private http: HttpClient) { }

  isAuthenticated() {
    return this.tokens
  }

  signup(data: { email: string, username: string, phone: string, password: string, first_name: string, last_name: string }) {
    return this.http.post(this.api + '/auth/jwt/token', data)
  }

  sigin(email: string, password: string) {
    return this.http.post(this.api + '/auth/jwt/token', { email, password })
  }

  logout() {

  }
}
