import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iCard } from '../interfaces/ICard';

@Injectable({providedIn: 'root'})
export class cardServicio {

private baseUrl = 'https://localhost:7141/Api/Tarjetas'

  constructor(private http: HttpClient) { }

  get(): Observable<iCard[]>{
    return this.http.get<iCard[]>(this.baseUrl)
  }

  post(data: iCard): Observable<iCard>{
    return this.http.post<iCard>(this.baseUrl, data)
  }

  delete(numero: string): Observable<iCard>{
    return this.http.delete<iCard>(`${this.baseUrl}/${numero} `)
  }



}
