import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FollowCursorComponent } from './shared/follow-cursor/follow-cursor.component';  // Asegúrate de la ruta correcta

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Componente standalone
  imports: [RouterModule, FooterComponent, FollowCursorComponent]  // Importar FollowCursorComponent
})
export class AppComponent {
  title = 'nombre-del-proyecto';
}
