describe ('LoginRestaurante', () => {
    beforeEach (() => { 
        cy.visit('http://127.0.0.1:5173/')
    })

    it('Crear plato',() =>{
        cy.get('.flex-col > .flex > [href="/login"] > .bg-white').click()
        cy.contains('Inicia sesión')
        cy.get('#email').type('RestauranteEmail@gmail.com')
        cy.get('#contrasena').type('SoyRestaurante123')
        cy.get('.justify-center > .px-4').click()
        cy.contains('Mis reseñas')
        cy.get('#root > :nth-child(1) > .min-h-screen > .gap-20 > [href="/crearMenu"]').click()
        cy.contains('Crear tu plato')
        cy.get('#url_img_menu').type('FotoPlato.jpg',{ delay: 50 })
        cy.get('#nombre_plato').type('Fideos con salsa Filetto', { delay: 50 })
        cy.get('#costo').type('550',{ delay: 50 })
        cy.get('#descripcion').type('Fideos tipo tallarines caseros con una increíble salsa filetto que colmará tus expectativas.')
        cy.wait(1000)
        cy.get('.w-64').click()
    })
})