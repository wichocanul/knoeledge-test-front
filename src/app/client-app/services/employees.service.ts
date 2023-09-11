import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DeleteEmployed, EmployedResponse } from '../interfaces/employees-interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseUrl: string = environment.urlKnowledgeTest;

  constructor( private http: HttpClient ) { }

  getAllEmployees(): Observable<EmployedResponse[]> {

    // TODO: Add interceptor for the request
    const url = `${this.baseUrl}/employees`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`);

    return this.http.get<EmployedResponse[]>( url, { headers });

  }

  delete(id: number): Observable<DeleteEmployed> {

    const url = `${this.baseUrl}/employees/${id}`;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`);

    return this.http.delete<DeleteEmployed>( url, { headers });
  }
}
