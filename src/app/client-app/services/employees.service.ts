import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DeleteEmployed, EmployedCreate, EmployedResponse } from '../interfaces/employees-interface';

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

  create(data: EmployedCreate): Observable<any> {

    // TODO: Add interceptor for the request
    const url = `${this.baseUrl}/employees`;
    const body = data;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`);

    return this.http.post<any>( url, body, { headers })

  }

  edit(data: EmployedCreate, id: number): Observable<any> {

    // TODO: Add interceptor for the request
    const url = `${this.baseUrl}/employees/${id}`;
    const body = data;
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${localStorage.getItem('token')}`);

    return this.http.put<any>( url, body, { headers })

  }
}
