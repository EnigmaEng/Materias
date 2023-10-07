describe ('Registro_Rest', () => {
    beforeEach (() => { 
        cy.visit('http://127.0.0.1:5173/')
    })
    it('Entrando al Registro',() =>{
        cy.contains('WHERE WE EAT')
        cy.get('.flex-col > .flex > [href="/registro"] > .font-bold').click()
        cy.get('#alias').type('Test_UserR')
        cy.get('#email').type('RestauranteEmail@gmail.com')
        cy.get('#contrasena').type('SoyRestaurante123')
        cy.get('#confirmContrasena').type('SoyRestaurante123')
        cy.get('#url_img_usuario').type('Foto_Resto.jpg')
        cy.get('#rol').select('Restaurante')
        cy.get('#nombre').type('Resto Cypress')
        cy.get(':nth-child(10) > input').click()
        cy.get('.mb-8').click()
        cy.contains('Registro exitoso')
    })
})