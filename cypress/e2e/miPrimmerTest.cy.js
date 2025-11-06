describe('template spec', () => {
  it('Happy Path', () => {
    cy.visit('ticketazo.com.ar/auth/login')
    // formas de tomar un elemento
    /* ID='#nombredelid'
    Clase='.nombresdelclass'
    elemento= input,a,p,div,span... 
    input=name["username"], name["email"]...*/

  })
  // cada it lo usamos para dividir las pruebas( un it por prueba)
  /* it.skip('Happy Path', () => {
    cy.visit('ticketazo.com.ar/auth/login')
  }) */// lo que hace aca essaltar este caso de prueba.(skip)

  it('Happy Path', () => {
    cy.visit('ticketazo.com.ar/auth/registerUser')
    cy.wait(2000) //para que espere 2seg
    cy.get('[data-cy="input-nombres"]').type("Juancito")
    cy.get('[data-cy="input-apellido"]').type("Regales")
    cy.get('[data-cy="input-telefono"]').type('1134564543');
    cy.get('[data-cy="input-dni"]').type('15436345');
    cy.get('[data-cy="select-provincia"]').type('Buenos Aires{enter}');
    cy.get('[data-cy="select-localidad"]').type('Hurlingham{enter}');
    cy.get('[data-cy="input-fecha-nacimiento"] div[aria-label="día, "]').clear();
    cy.get('[data-cy="input-fecha-nacimiento"] div[aria-label="día, "]').type('02');
    cy.get('[data-cy="input-fecha-nacimiento"] div[aria-label="mes, "]').type('06');
    cy.get('[data-cy="input-fecha-nacimiento"] div[aria-label="año, "]').type('1956');
    cy.get('[data-cy="input-email"]').type('he@gmail.com');
    cy.get('[data-cy="input-confirmar-email"]').type('he@gmail.com');
    cy.get('[data-cy="input-password"]').type('1234');
    cy.get('[data-cy="input-repetir-password"]').type('1234');
    cy.get('[data-cy="btn-registrarse"]').click();


  })
})