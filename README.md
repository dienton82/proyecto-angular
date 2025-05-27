# 👥 Proyecto de Gestión de Usuarios en Angular

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![Jasmine](https://img.shields.io/badge/Jasmine-8A4182?style=for-the-badge&logo=jasmine&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

## Capturas de pantalla

- **Pantalla principal de la aplicación**  
![Pantalla principal](src/assets/screenshots/1.jpg)


- **Pantalla principal de la aplicación**  
![Pruebas E2E](src/assets/screenshots/gif3.gif)


## 🚀 Descripción

Aplicación web desarrollada con **Angular** para la gestión de usuarios. Permite crear, editar, eliminar y visualizar usuarios, junto con los módulos asignados. El proyecto está diseñado como una SPA, optimizado para desplegarse en **GitHub Pages**.


## 📈 Características destacadas

- ➕ Crear, editar y eliminar usuarios
- 📋 Visualización de detalles y módulos asignados
- 📆 Interfaz responsiva con Tailwind CSS
- 🧪 Pruebas unitarias con Jasmine/Karma
- 🌐 Pruebas E2E con Cypress
- ⚠️ Manejo de errores y confirmaciones personalizadas
- 🚀 Compatible con navegadores modernos

---
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


## Cómo hacer pruebas en el proyecto

## Pruebas de funcionalidad con Jasmine/Karma
Este proyecto usa **Jasmine** para hacer pruebas unitarias (para checar que cada parte de la aplicación funcione bien) y **Karma** como una herramienta para correr estas pruebas.

###	Para correr las pruebas:
`ng test`

- **Ejemplo de pruebas  Jasmine/Karma**   
![Pruebas E2E](src/assets/screenshots/6.jpg)


## Pruebas E2E con Cypress

### Asegúrate de haber instalado Cypress con:
`npm install cypress --save-dev`


- **Ejemplo de pruebas E2E con Cypress**  
![Pruebas E2E](src/assets/screenshots/gif2.gif)


## Para abrir Cypress y ejecutar las pruebas:
`npx cypress open`

## Si prefieres correr las pruebas sin abrir el navegador, puedes hacerlo con:
`npx cypress run`

## Descripción de carpetas y archivos

- **app/core/**: Contiene los servicios principales de la aplicación, como `InMemoryUserService` y `ModuleService`.
- **app/footer/**: Incluye el componente `FooterComponent`, que es parte del diseño global de la aplicación.
- **app/user/**: Aquí se encuentran los componentes relacionados con la funcionalidad de usuarios, como `UserListComponent`, `UserFormComponent`, y `UserDetailComponent`.
- **app/shared/**: Incluye componentes reutilizables en toda la aplicación, como `FollowCursorComponent`.
- **app.component.ts**: El componente raíz de la aplicación, donde se manejan las vistas principales.
- **app.routes.ts**: Define la configuración de rutas para la navegación en la aplicación.
- **assets/**: Contiene recursos estáticos, como imágenes y íconos.
- **environments/**: Archivos de configuración para los entornos de desarrollo y producción.
- **styles.css**: Archivo de estilos globales para toda la aplicación.

## 🗂️ Estructura del proyecto

```
proyecto-angular-limpio/
├── src/
│   ├── app/
│   │   ├── core/         # Servicios (InMemory, Módulos)
│   │   ├── footer/       # Componente global de pie de página
│   │   ├── shared/       # Componentes reutilizables (FollowCursor)
│   │   ├── user/         # CRUD de usuarios y vistas
│   │   ├── app.component.ts
│   │   └── app.routes.ts # Configuración de rutas
│   ├── assets/           # Imágenes y recursos
│   ├── environments/     # Variables de entorno
│   └── styles.css        # Estilos globales
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📸 Capturas

Las capturas y grabaciones de las pruebas E2E (Cypress), Jasmine/Karma y la interfaz se encuentran en:

```
src/assets/screenshots/
```

---

## 👤 Autor

Desarrollado por **Yeison Eduardo Alvarez Garcia**

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**.

---

## ✨ Gracias por visitar

Si deseas contribuir, detectar errores o sugerir mejoras, abre un *issue* en el repositorio.

⚡ ¡Gracias por probar el Proyecto de Gestión de Usuarios en Angular!



