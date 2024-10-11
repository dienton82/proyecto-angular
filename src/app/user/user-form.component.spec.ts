import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],  // Asegúrate de importar el módulo necesario
      declarations: [UserFormComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when empty', () => {
    expect(component.userForm.valid).toBeFalsy();
  });

  it('should validate form fields', () => {
    let name = component.userForm.controls['name'];
    let email = component.userForm.controls['email'];

    name.setValue('John Doe');
    email.setValue('invalid-email');

    expect(email.valid).toBeFalsy(); // Email no es válido
    expect(name.valid).toBeTruthy(); // Nombre es válido
  });

  it('should submit a valid form', () => {
    let name = component.userForm.controls['name'];
    let email = component.userForm.controls['email'];
    let phone = component.userForm.controls['phone'];

    name.setValue('John Doe');
    email.setValue('john.doe@example.com');
    phone.setValue('1234567890');

    expect(component.userForm.valid).toBeTruthy(); // El formulario es válido
  });
});
