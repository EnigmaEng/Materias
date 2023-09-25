describe('RegistroTurista-Test', () =>{
    //Con Before Each colocamos la condicion de que antes de ejecutar cada test, siempre visite la pagina inicial
       beforeEach(() => {
        cy.visit('http://127.0.0.1:5173/')
    })
    it('Primer pagina abierta', () => {
        // Sirve para saber si nuestra pagina esta renderizando
        cy.contains('Where We Eat')
    })

    it('Registro', () => {
        // Entrando al formulario de Registro
        cy.contains('Registrarse').click()
    })

    it('Registrandose', () => {
        // Registrandonos con un usuario turista
        cy.contains('Registrarse').click()
        cy.get('#alias').type('Test_UserT')
        cy.get('#email').type('TuristaEmail@gmail.com')
        cy.get('#contrasena').type('SoyTurista123')
        cy.get('#confirmContrasena').type('SoyTurista123')
        cy.get('#url_img_usuario').type('img_turista.jpg')
        cy.get('#rol').select('Turista')
        cy.get('#nombres').type('Turista Test')
        cy.get('#apellidos').type('Cypress Test')
        cy.get('#motivo_alojamiento').type('Trabajo')
        cy.get('#nacionalidad').type('Uruguay')
        cy.get(':nth-child(10) > input').click()
        cy.get('.mb-8').click()
        cy.contains('Registro exitoso')
    })
})