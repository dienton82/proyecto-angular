import { Component, OnInit } from '@angular/core';
import { InMemoryUserService, User } from '../../core/in-memory-user.service';
import { Observable, of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],  // Importamos el archivo CSS asociado
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]> | undefined;  // Cambiar a Observable

  constructor(private userService: InMemoryUserService) {}

  ngOnInit(): void {
    this.users$ = of(this.userService.getUsers());  // Usar of() para envolver los usuarios en un Observable
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId);  // Llamar al método del servicio para eliminar el usuario
    this.users$ = of(this.userService.getUsers());  // Refrescar la lista de usuarios después de la eliminación
  }
}
