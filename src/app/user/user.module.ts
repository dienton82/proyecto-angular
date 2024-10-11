import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form.component';  // Añadir formulario de usuario

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'new', component: UserFormComponent },
  { path: ':id', component: UserDetailComponent },
  { path: 'edit/:id', component: UserFormComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  // Usa forChild para módulos con lazy loading
  ],
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserFormComponent
  ]
})
export class UserModule { }
