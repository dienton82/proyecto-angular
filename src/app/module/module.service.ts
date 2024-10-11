import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModuleService {
  private apiURL = 'https://jsonplaceholder.typicode.com/posts';  // Simulamos módulos como posts

  constructor(private http: HttpClient) {}

  // Obtener lista de módulos
  getModules(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }

  // Obtener un módulo por ID
  getModuleById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  // Crear un módulo (simulado)
  createModule(moduleData: any): Observable<any> {
    return this.http.post(this.apiURL, moduleData);
  }

  // Actualizar un módulo (simulado)
  updateModule(id: number, moduleData: any): Observable<any> {
    return this.http.put(`${this.apiURL}/${id}`, moduleData);
  }

  // Eliminar un módulo (simulado)
  deleteModule(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  // Obtener módulos asignados a un usuario (simulado con userId como filtro)
  getModulesByUser(userId: number): Observable<any[]> {
    // Filtramos los posts para simular la asignación de módulos por usuario
    return this.http.get<any[]>(`${this.apiURL}?userId=${userId}`);
  }
}
