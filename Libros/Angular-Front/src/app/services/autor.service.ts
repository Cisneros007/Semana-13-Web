import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor } from '../models/autor.model'; // Asegúrate de importar el modelo Autor

const baseUrl = 'http://localhost:8080/api/autores';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Autor[]> {
    return this.http.get<Autor[]>(baseUrl);
  }

  get(id: any): Observable<Autor> {
    return this.http.get<Autor>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByNombre(nombre: any): Observable<Autor[]> {
    return this.http.get<Autor[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
