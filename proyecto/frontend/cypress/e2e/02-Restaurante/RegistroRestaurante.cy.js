describe ('Registro_Rest', () => {
    beforeEach (() => { 
<<<<<<< HEAD
        cy.visit('http://wweat.ddns.net/')
        //cy.visit('http://127.0.0.1:5173/')
=======
        cy.visit('http://localhost:5173/')
>>>>>>> 2071a7e3a27ad28c65ae28890a5c0d8aab43ef29
    })
    it('Entrando al Registro',() =>{
        cy.contains('WHERE WE EAT')
        cy.get('.flex-col > .flex > [href="/registro"] > .font-bold').click()
        cy.get('#alias').type('Test_UserR')
        cy.get('#email').type('RestauranteEmail@gmail.com',{ delay: 30 })
        cy.get('#contrasena').type('SoyRestaurante123',{ delay: 30 })
        cy.get('#confirmContrasena').type('SoyRestaurante123')
        cy.get('#url_img_usuario').selectFile("./cypress/imgs/restaurante.png");
        cy.get('#rol').select('Restaurante')
        cy.wait(200)
        cy.get('#nombre').type('Resto Cypress',{ delay: 30 })
        cy.get('#calle').type('Av. Siempre Viva',{ delay: 30 })
        cy.get('#nro_puerta').type('2222',{ delay: 30 })
        cy.get('#nro_local').type('22',{ delay: 30 })
        cy.get('#descripcion').select('Comida mexicana')
        cy.get('#esquina').type('Springfield')
        cy.get(':nth-child(15) > input').click()
        cy.get('.mb-8').click()
        cy.contains('Creacion de usuario exitosa')
    })
})