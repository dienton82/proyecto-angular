import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  // Asegúrate de importar Observable

@Injectable({
  providedIn: 'root',
})
export class ModuleService {
  assignModuleToUser(userId: number, module: { title: string; }): void {
    throw new Error('Method not implemented.');
  }
  private apiURL = 'https://jsonplaceholder.typicode.com/posts';  // La URL para simular los módulos

  constructor(private http: HttpClient) {}

  // Asegúrate de que este método devuelva un observable
  getModules(): Observable<any> {
    return this.http.get(this.apiURL);  // Esto devuelve un observable
  }
}
