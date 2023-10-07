describe ('LoginRestaurante', () => {
    beforeEach (() => { 
        cy.visit('http://127.0.0.1:5173/')
    })

    it('Entrando al Login',() =>{
        cy.contains('WHERE WE EAT')
        cy.get('.flex-col > .flex > [href="/login"] > .bg-white').click()
    })

    it('Loguenado user Turista',() =>{
        cy.get('.flex-col > .flex > [href="/login"] > .bg-white').click()
        cy.contains('Iniciar sesion')
        cy.get('#email').type('RestauranteEmail@gmail.com')
        cy.get('#contrasena').type('SoyRestaurante123')
        cy.get('.justify-center > .px-4').click()
        cy.contains('Mis reseñas')
    })
})
