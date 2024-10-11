import { Component, OnInit } from '@angular/core';
import { ModuleService } from '../module.service';  // Servicio para módulos
import { CommonModule } from '@angular/common';  // Para *ngIf y *ngFor

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ModuleListComponent implements OnInit {
  modules: any[] = [];

  constructor(private moduleService: ModuleService) {}

  ngOnInit(): void {
    this.moduleService.getModules().subscribe((data: any[]) => {
      this.modules = data;
    });
  }
}
