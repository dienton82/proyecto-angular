import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  // Obtener lista de usuarios
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  // Obtener un usuario por ID
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  // Crear un usuario
  createUser(userData: any): Observable<any> {
    return this.http.post(this.apiURL, userData);
  }

  // Actualizar un usuario
  updateUser(id: number, userData: any): Observable<any> {
    return this.http.put(`${this.apiURL}/${id}`, userData);
  }

  // Eliminar un usuario
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
