import { HighlightModuleDirective } from './highlight-module.directive';
import { ElementRef, Renderer2 } from '@angular/core'; // Importa ElementRef y Renderer2
import 'jasmine';

describe('HighlightModuleDirective', () => {
  let mockElementRef: ElementRef;
  let mockRenderer: Renderer2;

  beforeEach(() => {
    // Crear una instancia simulada de ElementRef
    mockElementRef = new ElementRef(document.createElement('div'));

    // Simular Renderer2 (podemos crear un objeto vacío porque normalmente no es necesario ejecutar sus métodos en la prueba)
    mockRenderer = jasmine.createSpyObj('Renderer2', ['setStyle', 'removeStyle']);
  });

  it('should create an instance', () => {
    // Pasar tanto ElementRef como Renderer2 al constructor de la directiva
    const directive = new HighlightModuleDirective(mockElementRef, mockRenderer);

    // Verificar que la directiva se crea correctamente
    expect(directive).toBeTruthy();
  });
});
