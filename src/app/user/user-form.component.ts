import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InMemoryUserService, User } from '../core/in-memory-user.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';  // Asegúrate de importar Observable y of

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  user$: Observable<User> | undefined;  // Cambiar a Observable
  isEditMode = false;
  userId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: InMemoryUserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.userId) {
      this.isEditMode = true;
      const user = this.userService.getUserById(this.userId);
      if (user) {
        this.userForm.patchValue(user);
        this.user$ = of(user);  // Envolver en Observable
      }
    }
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }

    const formData: User = this.userForm.value;

    if (this.isEditMode) {
      this.userService.updateUser(this.userId!, formData);
    } else {
      this.userService.addUser(formData);
    }

    this.router.navigate(['/users']);
  }

  onCancel(): void {
    this.router.navigate(['/users']);
  }
}
