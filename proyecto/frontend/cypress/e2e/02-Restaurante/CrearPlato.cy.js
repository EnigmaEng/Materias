describe ('LoginRestaurante', () => {
    beforeEach (() => { 
        cy.visit('http://wweat.ddns.net/')
    })

    it('Crear plato',() =>{
        cy.get('[href="/login"] > .bg-wwe').click()
        cy.contains('Iniciar Sesión')
        cy.get('#email').type('RestauranteEmail@gmail.com',{ delay: 15 })
        cy.get('#contrasena').type('SoyRestaurante123',{ delay: 15 })
        cy.get(':nth-child(3) > .flex').click()
        cy.contains('Ver menú').click()
        cy.contains('Crear plato').click()
        cy.get('#url_img_menu').type('FotoPlato.jpg',{ delay: 50 })
        cy.get('#nombre_plato').type('Fideos con salsa Filetto', { delay: 50 })
        cy.get('#costo').type('550',{ delay: 50 })
        cy.get('#descripcion').type('Fideos tipo tallarines caseros con una increíble salsa filetto que colmará tus expectativas.')
        cy.wait(1000)
        cy.get('.w-64').click()
    })
})