import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModuleDirective } from './highlight-module.directive';  // Importar la directiva

@NgModule({
  declarations: [
    HighlightModuleDirective,  // Declarar la directiva aquí
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightModuleDirective  // Exportar la directiva para usarla en otros módulos
  ]
})
export class SharedModule { }
