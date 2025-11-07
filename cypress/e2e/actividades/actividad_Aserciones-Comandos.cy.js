
// EJERCICIO 1
describe('Formulario de Registro', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
  })

  it.skip('Completa todos los campos y presiona Registrar', () => {

    cy.log('Ingresando nombres, apellidos, celular y dni')
    cy.get('[data-cy="input-nombres"]').clear().type('Juan')
    cy.get('[data-cy="input-apellido"]').clear().type('Pérez')
    cy.get('[data-cy="input-telefono"]').clear().type('3511234567')
    cy.get('[data-cy="input-dni"]').clear().type('20268800')

    cy.log('Seleccionar provincia y localidad')
    cy.get('[data-cy="select-provincia"]').clear().type('Córdoba')
    cy.get('ul > li > span').contains('Córdoba').click()
    cy.get('[data-cy="select-localidad"]').clear().type('Córdoba')
    cy.get('ul > li > span').contains('Córdoba').click()


    cy.log('Ingresando fecha de nacimiento')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="day"]').clear().type('15')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="month"]').clear().type('08')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="year"]').clear().type('1995')


    cy.log('Ingresando mail y confirmación')
    cy.get('[data-cy="input-email"]').clear().type('juan.perez90@example.com')
    cy.get('[data-cy="input-confirmar-email"]').clear().type('juan.perez90@example.com')

    cy.log('Ingresando contraseña y confirmación')
    cy.get('[data-cy="input-password"]').clear().type('P@ssw0rd123')
    cy.get('[data-cy="input-repetir-password"]').clear().type('P@ssw0rd123')


    cy.log('Enviar formulario')
    // cy.get('[data-cy="btn-registrarse"]').click().wait(2000)
    cy.wait(3000)
  })
  
  // EJERCICIO 2
  it.skip('Test para email ya registrado', () => {

    cy.log('Ingresando nombres, apellidos, celular y dni')
    cy.get('[data-cy="input-nombres"]').clear().type('Ramon')
    cy.get('[data-cy="input-apellido"]').clear().type('Salomon')
    cy.get('[data-cy="input-telefono"]').clear().type('1134567453')
    cy.get('[data-cy="input-dni"]').clear().type('14235355')

    cy.log('Seleccionar provincia y localidad')
    cy.get('[data-cy="select-provincia"]').clear().type('Buenos Aires')
    cy.get('ul > li > span').contains('Buenos Aires').click()
    cy.get('[data-cy="select-localidad"]').clear().type('Hurlingham')
    cy.get('ul > li > span').contains('Hurlingham').click()

    cy.log('Ingresando fecha de nacimiento')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="day"]').clear().type('20')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="month"]').clear().type('06')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="year"]').clear().type('1956')

    cy.log('Ingresando mail y confirmación')
    cy.get('[data-cy="input-email"]').clear().type('juan.perez90@example.com')
    cy.get('[data-cy="input-confirmar-email"]').clear().type('juan.perez90@example.com')

    cy.log('Ingresando contraseña y confirmación')
    cy.get('[data-cy="input-password"]').clear().type('Pa@12345')
    cy.get('[data-cy="input-repetir-password"]').clear().type('Pa@12345')
    
    cy.log('Registrar usuario')
    cy.get('[data-cy="btn-registrarse"]').click();

    cy.wait(5000)

  })

  it.skip('Test para DNI ya registrado', () => {
    cy.log('Ingresando nombres, apellidos, celular y dni')
    cy.get('[data-cy="input-nombres"]').clear().type('Romina')
    cy.get('[data-cy="input-apellido"]').clear().type('Veliz')
    cy.get('[data-cy="input-telefono"]').clear().type('1176548343')
    cy.get('[data-cy="input-dni"]').clear().type('20268800')

    cy.log('Seleccionar provincia y localidad')
    cy.get('[data-cy="select-provincia"]').clear().type('Buenos Aires')
    cy.get('ul > li > span').contains('Buenos Aires').click()
    cy.get('[data-cy="select-localidad"]').clear().type('Cabildo')
    cy.get('ul > li > span').contains('Cabildo').click()

    cy.log('Ingresando fecha de nacimiento')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="day"]').clear().type('09')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="month"]').clear().type('03')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="year"]').clear().type('1986')

    cy.log('Ingresando mail y confirmación')
    cy.get('[data-cy="input-email"]').clear().type('romii.v@example.com')
    cy.get('[data-cy="input-confirmar-email"]').clear().type('romii.v@example.com')

    cy.log('Ingresando contraseña y confirmación')
    cy.get('[data-cy="input-password"]').clear().type('Ro@12345')
    cy.get('[data-cy="input-repetir-password"]').clear().type('Ro@12345')
    
    cy.log('Registrar usuario')
    cy.get('[data-cy="btn-registrarse"]').click();

    cy.wait(5000)

  })

  it.skip('Validar redirección exitosa', () => {
    cy.log('Ingresando nombres, apellidos, celular y dni')
    cy.get('[data-cy="input-nombres"]').clear().type('Romina')
    cy.get('[data-cy="input-apellido"]').clear().type('Veliz')
    cy.get('[data-cy="input-telefono"]').clear().type('1176548343')
    cy.get('[data-cy="input-dni"]').clear().type('14235377')

    cy.log('Seleccionar provincia y localidad')
    cy.get('[data-cy="select-provincia"]').clear().type('Buenos Aires')
    cy.get('ul > li > span').contains('Buenos Aires').click()
    cy.get('[data-cy="select-localidad"]').clear().type('Cabildo')
    cy.get('ul > li > span').contains('Cabildo').click()

    cy.log('Ingresando fecha de nacimiento')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="day"]').clear().type('09')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="month"]').clear().type('03')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="year"]').clear().type('1986')

    cy.log('Ingresando mail y confirmación')
    cy.get('[data-cy="input-email"]').clear().type('romiv@example.com')
    cy.get('[data-cy="input-confirmar-email"]').clear().type('romiv@example.com')

    cy.log('Ingresando contraseña y confirmación')
    cy.get('[data-cy="input-password"]').clear().type('Ro@12345')
    cy.get('[data-cy="input-repetir-password"]').clear().type('Ro@12345')
    
    cy.log('Registrar usuario')
    cy.get('[data-cy="btn-registrarse"]').click();
    cy.wait(5000)

    cy.url().should('eq', 'https://ticketazo.com.ar/auth/login')

    cy.wait(5000)

  })

  it.skip('Validación de requisitos de contraseña', () => {
    cy.log('Ingresando nombres, apellidos, celular y dni')
    cy.get('[data-cy="input-nombres"]').clear().type('Romina')
    cy.get('[data-cy="input-apellido"]').clear().type('Veliz')
    cy.get('[data-cy="input-telefono"]').clear().type('1176548343')
    cy.get('[data-cy="input-dni"]').clear().type('14235377')

    cy.log('Seleccionar provincia y localidad')
    cy.get('[data-cy="select-provincia"]').clear().type('Buenos Aires')
    cy.get('ul > li > span').contains('Buenos Aires').click()
    cy.get('[data-cy="select-localidad"]').clear().type('Cabildo')
    cy.get('ul > li > span').contains('Cabildo').click()

    cy.log('Ingresando fecha de nacimiento')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="day"]').clear().type('09')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="month"]').clear().type('03')
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="year"]').clear().type('1986')

    cy.log('Ingresando mail y confirmación')
    cy.get('[data-cy="input-email"]').clear().type('romi@example.com')
    cy.get('[data-cy="input-confirmar-email"]').clear().type('romi@example.com')

    cy.log('Ingresando contraseña con menos de 6 caracteres')
    cy.get('[data-cy="input-password"]').clear().type('Pe@12')
    cy.get('[data-cy="input-repetir-password"]').clear().type('Pe@12')
    
    cy.log('Registrar usuario')
    cy.get('[data-cy="btn-registrarse"]').click().wait(1000)
    cy.log('Mostrar mensaje')
    cy.get('[data-cy="error-message"]').should('be.visible').and('contain.text', 'La contraseña debe tener al menos 6 caracteres');

    cy.log('Ingresando contraseña que no cumple requisitos')
    cy.get('[data-cy="input-password"]').clear().type('Pepepe')
    cy.get('[data-cy="input-repetir-password"]').clear().type('Pepepe')
    
    cy.log('Registrar usuario')
    cy.get('[data-cy="btn-registrarse"]').click().wait(1000)
    cy.log('Mostrar mensaje')
    cy.get('[data-cy="error-message"]').should('be.visible').and('contain.text', 'La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y símbolos.');

    cy.wait(5000)

  })
})
