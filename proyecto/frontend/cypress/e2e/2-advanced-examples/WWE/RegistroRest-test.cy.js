describe('RegistroRest-Test', () =>{
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
        // Registrandonos con un usuario Restaurante
        cy.contains('Registrarse').click()
        cy.get('#alias').type('Test_UserR')
        cy.get('#email').type('RestauranteEmail@gmail.com')
        cy.get('#contrasena').type('SoyRestaurante123')
        cy.get('#confirmContrasena').type('SoyRestaurante123')
        cy.get('#url_img_usuario').type('img_restaurante.jpg')
        cy.get('#rol').select('Restaurante')
        cy.get('#nombre').type('Resto Cypress')
        cy.get(':nth-child(10) > input').click()
        cy.get('.mb-8').click()
        cy.contains('Registro exitoso')
    })
})