describe ('LoginRestaurante', () => {
    beforeEach (() => { 
        cy.visit('http://wweat.ddns.net/')
        //cy.visit('http://127.0.0.1:5173/')
    })

    it('Crear plato',() =>{
        cy.get('.hidden > :nth-child(1) > .z-10 > .gap-5 > [href="/login"] > .bg-wwe').click()
        cy.contains('Iniciar Sesión')
        cy.get('#email').type('RestauranteEmail@gmail.com',{ delay: 15 })
        cy.get('#contrasena').type('SoyRestaurante123',{ delay: 15 })
        cy.get(':nth-child(3) > .flex').click()
        cy.contains('Ver menú').click()
        cy.wait(15000)
        cy.get('.p-8 > .px-2').click()
        cy.get('#nombre_plato').type('Nuevo Plato',{delay: 15})
        cy.get('#costo').type('450',{delay: 15})
        cy.get('#descripcion').type('Esta es una modificación al plato.',{delay: 15})
        cy.get('#url_img_menu').selectFile("./cypress/imgs/nuevoplato.jpeg")
        cy.get('.flex > .bg-wwe').click()
        cy.get('.left-24 > .p-2').click()
    })
})