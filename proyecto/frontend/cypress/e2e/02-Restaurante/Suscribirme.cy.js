describe ('LoginRestaurante', () => {
    beforeEach (() => { 
        cy.visit('http://127.0.0.1:5173/')
    })

    it('Comprando sub',() =>{
        cy.get('[href="/login"] > .bg-wwe').click()
        cy.contains('Iniciar Sesión')
        cy.get('#email').type('RestauranteEmail@gmail.com',{ delay: 25 })
        cy.get('#contrasena').type('SoyRestaurante123',{ delay: 25 })
        cy.get(':nth-child(3) > .flex').click()
        cy.contains('Ver suscripciones').click()
        cy.get(':nth-child(3) > .-mt-2 > .rounded-2xl > .mx-auto > .mt-10').click()
        cy.contains('La compra se realizo correctamente')
    })
})
