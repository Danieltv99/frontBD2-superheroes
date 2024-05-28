import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  private baseUrl = 'http://localhost:3306/api/multimedia'; // Asegúrate de ajustar esta URL a tu backend

  constructor(private http: HttpClient) {}

  getAllMultimedia(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getMultimediaById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createMultimedia(multimedia: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, multimedia);
  }

  updateMultimedia(id: string, multimedia: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, multimedia);
  }

  deleteMultimedia(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
