import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModuleService } from '../../module/module.service';
import { InMemoryUserService } from '../../core/in-memory-user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],  // Aquí añadimos los estilos
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class UserDetailComponent implements OnInit {
  user: any;
  modules: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: InMemoryUserService,
    private moduleService: ModuleService
  ) {}

  ngOnInit() {
    const userId = Number(this.route.snapshot.paramMap.get('id'));

    this.user = this.userService.getUserById(userId);

    if (this.user) {
      // Simular la asignación de módulos al usuario
      this.moduleService.getModulesByUser(userId).subscribe((modules: any[]) => {
        this.modules = modules;
      });
    }
  }

  goBackToList() {
    this.router.navigate(['/users']);
  }
}
