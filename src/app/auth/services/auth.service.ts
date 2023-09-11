import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/auth-interface';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.urlKnowledgeTest;

  constructor( private http: HttpClient) { }

  login(email: string, password: string) {

    const url = `${this.baseUrl}/login`;
    const body = {email, password};

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if( resp.message !== 'Unauthorized') {
            localStorage.setItem('token', resp.access_token);
            localStorage.setItem('user', resp.user.name);
          }
        })
      )
  }
}
