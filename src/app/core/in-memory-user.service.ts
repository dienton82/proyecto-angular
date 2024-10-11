import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryUserService {
  private users: User[] = JSON.parse(localStorage.getItem('users')!) || [
    // Lista inicial de usuarios de ejemplo
    { id: 1, name: 'Leanne Graham', email: 'leanne@example.com', phone: '1-770-736-8031' },
    { id: 2, name: 'Ervin Howell', email: 'ervin@example.com', phone: '010-692-6593' },
    { id: 3, name: 'Clementine Bauch', email: 'clementine@example.com', phone: '1-463-123-4447' },
    { id: 4, name: 'Patricia Lebsack', email: 'patricia@example.com', phone: '493-170-9623' }
  ];

  // Obtén la lista completa de usuarios (incluye usuarios de localStorage)
  getUsers(): User[] {
    return this.users;
  }

  // Obtener un usuario por ID
  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  // Agregar un nuevo usuario
  addUser(user: User): User {
    user.id = this.users.length + 1;  // Simular auto-incremento
    this.users.push(user);
    this.updateLocalStorage();
    return user;  // Devuelve el usuario para usarlo luego
  }

  // Actualizar un usuario existente
  updateUser(id: number, updatedUser: User): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...updatedUser, id };  // Asegura que el ID no cambie
      this.updateLocalStorage();
    }
  }

  // Eliminar un usuario por ID
  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
    this.updateLocalStorage();
  }

  // Actualiza localStorage cuando se hacen cambios
  private updateLocalStorage(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}

// Exporta la interfaz User para que esté disponible en otros archivos
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}
