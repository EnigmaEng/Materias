describe ('LoginRestaurante', () => {
    beforeEach (() => { 
        cy.visit('http://wweat.ddns.net/')
    })

    it('Loguenado user Restaurante',() =>{
        cy.get('.hidden > :nth-child(1) > .z-10 > .gap-5 > [href="/login"] > .bg-wwe').click()
        cy.contains('Iniciar Sesión')
        cy.get('#email').type('RestauranteEmail@gmail.com',{ delay: 45 })
        cy.get('#contrasena').type('SoyRestaurante123',{ delay: 45 })
        cy.get(':nth-child(3) > .flex').click()
        cy.contains('Menú')
        /*Ingresando al perfil del restaurante*/
        cy.get('label.btn.btn-ghost.btn-circle.mt-3.shadow-xl').click();
    })
})