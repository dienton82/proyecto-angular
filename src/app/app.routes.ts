import { provideRouter, withHashLocation } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserFormComponent } from './user/user-form.component';

export const routes = provideRouter(
  [
    { path: 'users', component: UserListComponent },
    { path: 'users/new', component: UserFormComponent },
    { path: 'users/:id', component: UserDetailComponent },
    { path: 'users/edit/:id', component: UserFormComponent },
    { path: '', redirectTo: '/users', pathMatch: 'full' }
  ],
  withHashLocation() // Esto activa el modo hash
);
