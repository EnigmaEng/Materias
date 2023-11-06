describe ('LoginRestaurante', () => {
    beforeEach (() => { 
        cy.visit('http://wweat.ddns.net/')
    })

    it('Comprando sub',() =>{
        cy.get('.hidden > :nth-child(1) > .z-10 > .gap-5 > [href="/login"] > .bg-wwe').click()
        cy.contains('Iniciar Sesión')
        cy.get('#email').type('RestauranteEmail@gmail.com',{ delay: 25 })
        cy.get('#contrasena').type('SoyRestaurante123',{ delay: 25 })
        cy.get(':nth-child(3) > .flex').click()
        cy.contains('Ver suscripciones').click()
        cy.get(':nth-child(3) > .-mt-2 > .rounded-2xl > .mx-auto > :nth-child(3)').click()
        cy.contains('Confirmar').click()
    })
})