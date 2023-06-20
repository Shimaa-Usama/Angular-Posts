import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return headers;
  }

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`, { headers: this.getHeaders() });
  }

  getByID<T>(path: string, id:number): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}/${id}`, { headers: this.getHeaders() });
  }

  post<T>(path: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${path}`, data, { headers: this.getHeaders() });
  }

  put<T>(path: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${path}`, data, { headers: this.getHeaders() });
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${path}`, { headers: this.getHeaders() });
  }
}