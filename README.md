# Proyecto de Gestión de Usuarios en Angular

Este proyecto es una aplicación web desarrollada con **Angular** que te permite gestionar usuarios: crearlos, editarlos, eliminarlos y ver detalles sobre ellos, además de ver los módulos asignados a cada usuario. Incluye pruebas para asegurar que todo funcione correctamente usando **Jasmine/Karma** para las pruebas de funcionalidad, y **Cypress** para simular lo que haría un usuario real en la aplicación.

## Características principales

- Crear, ver, editar y eliminar usuarios.
- Integración con la API de **JSONPlaceholder** para obtener datos de usuarios y módulos.
- Diseño moderno y adaptado para todo tipo de pantallas (responsivo).
- Pruebas automáticas para asegurar que todo funcione bien.

# Cómo instalar y ejecutar el proyecto

## Requisitos
- Node.js (versión 14 o superior)
- npm (la herramienta que viene con Node.js)
- Angular CLI (opcional pero recomendado)
- Puedes instalarlo con el siguiente comando:
  <br> `npm install -g @angular/cli`

# Instalación del proyecto

## Descarga el proyecto (Clonar el repositorio):
`git clone https://github.com/usuario/proyecto-angular-limpio.git`
## Entra en la carpeta del proyecto:
`cd proyecto-angular-limpio`
## Instala las dependencias (paquetes necesarios):
`npm install`


# Cómo iniciar el proyecto

## Levanta el servidor de desarrollo:
`ng serve --port 4301`
<br><br>**Abre el navegador en** `http://localhost:4301` **para ver la aplicación funcionando.**


# Cómo hacer pruebas en el proyecto

## Pruebas de funcionalidad con Jasmine/Karma
Este proyecto usa **Jasmine** para hacer pruebas unitarias (para checar que cada parte de la aplicación funcione bien) y **Karma** como una herramienta para correr estas pruebas.


## 	Para correr las pruebas:
`ng test`
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
