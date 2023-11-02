describe ('LoginRestaurante', () => {
    beforeEach (() => { 
        cy.visit('http://127.0.0.1:5173/')
    })

    it('Crear descuento',() =>{
        cy.get('[href="/login"] > .bg-wwe').click()
        cy.contains('Iniciar Sesión')
        cy.get('#email').type('RestauranteEmail@gmail.com',{ delay: 15 })
        cy.get('#contrasena').type('SoyRestaurante123',{ delay: 15 })
        cy.get(':nth-child(3) > .flex').click()
        cy.contains('Ver menú').click()
        cy.contains('Crear descuento').click()
        cy.get('#titulo_descuento').type('2x1 Tacos mexicanos',{ delay: 20 })
        cy.get('#descripcion').type('Tacos mexicanos super picantes', { delay: 20 })
        cy.get('#url_img_descuento').type('Taquitos.jpg',{ delay: 20 })
        cy.get('#costo').type('600')
        cy.get('#fecha_inicio').type('2023-11-14')
        cy.get('#fecha_fin').type('2023-11-20')
        cy.wait(1000)
        cy.get('.w-52').click()
    })
})