describe ('LoginRestaurante', () => {
    beforeEach (() => { 
        //cy.visit('http://wweat.ddns.net/')
        cy.visit('http://127.0.0.1:5173/')
    })

    it('Crear descuento',() =>{
        cy.get('.hidden > :nth-child(1) > .z-10 > .gap-5 > [href="/login"] > .bg-wwe').click()
        cy.contains('Iniciar Sesión')
        cy.get('#email').type('RestauranteEmail@gmail.com',{ delay: 15 })
        cy.get('#contrasena').type('hola1234',{ delay: 15 })
        cy.get(':nth-child(3) > .flex').click()
        cy.get('#cypress').click();
        cy.contains('Configuración').click();
        cy.get(':nth-child(4) > .flex > .font-aref').click()
        cy.get('.slick-current > :nth-child(1) > .bg-white > .block').click()
        cy.get('#titulo_descuento').type('Descuento Editado')
        cy.get('#descripcion').type('Esto es una descripcion modificada.')
        cy.get('#url_img_descuento').selectFile("./cypress/imgs/Suscribirte.png")
        cy.get('#costo').type('450')
        cy.get('#fecha_inicio').type('2023-11-20')
        cy.get('#fecha_fin').type('2023-11-30')
        cy.get(':nth-child(8) > .w-full').click()
    })
})