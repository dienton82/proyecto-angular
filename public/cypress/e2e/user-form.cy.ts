describe('User Form', () => {
  it('should load the user form page', () => {
    cy.visit('http://localhost:4301/users/new');
    cy.contains('Nombre');  // Verifica que el campo nombre esté en la página
  });

  it('should show validation errors when form is invalid', () => {
    cy.visit('http://localhost:4301/users/new');

    cy.get('form').submit(); // Simula un envío de formulario vacío

    // Verifica que se muestren los errores de validación
    cy.contains('El nombre es requerido');
    cy.contains('El correo electrónico es requerido');
  });

  it('should submit the form when valid', () => {
    cy.visit('http://localhost:4301/users/new');

    cy.get('[formControlName="name"]').type('John Doe');
    cy.get('[formControlName="email"]').type('john.doe@example.com');
    cy.get('[formControlName="phone"]').type('1234567890');

    cy.get('form').submit();

    // Verifica el resultado después del envío
    cy.contains('Usuario creado con éxito');
  });
});
