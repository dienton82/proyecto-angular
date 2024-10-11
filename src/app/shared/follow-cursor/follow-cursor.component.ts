import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-follow-cursor',
  templateUrl: './follow-cursor.component.html',
  styleUrls: ['./follow-cursor.component.css'],
  standalone: true,  // Marcar el componente como standalone
  imports: [CommonModule]  // Importar CommonModule para que funcione ngStyle
})
export class FollowCursorComponent implements OnInit {
  position = { x: 0, y: 0 };

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.position = { x: event.clientX, y: event.clientY };
  }

  get gradientStyle() {
    return {
      background: `radial-gradient(600px at ${this.position.x}px ${this.position.y}px, rgba(255, 255, 255, 0.1), transparent 80%)`
    };
  }

  get cursorStyle() {
    return {
      left: `${this.position.x}px`,
      top: `${this.position.y}px`,
      transform: 'translate(-50%, -50%)',
    };
  }
}
