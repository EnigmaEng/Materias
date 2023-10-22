describe ('LoginRestaurante', () => {
    beforeEach (() => { 
        cy.visit('http://127.0.0.1:5173/')
    })

    it('Entrando al Login',() =>{
        cy.contains('WHERE WE EAT')
        cy.get('.flex-col > .flex > [href="/login"] > .bg-white').click()
    })
    it('Loguenado user Restaurante',() =>{
        cy.get('.flex-col > .flex > [href="/login"] > .bg-white').click()
        cy.contains('Inicia sesión')
        cy.get('#email').type('RestauranteEmail@gmail.com',{ delay: 40 })
        cy.get('#contrasena').type('SoyRestaurante123',{ delay: 40 })
        cy.get('.justify-center > .px-4').click()
        cy.contains('Mis reseñas')
        cy.get('ul').click()
    })
})