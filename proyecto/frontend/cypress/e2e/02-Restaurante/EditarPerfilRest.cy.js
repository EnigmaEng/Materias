describe('LoginRestaurante', () => {
    beforeEach(() => {
      //cy.visit('http://127.0.0.1:5173/')
      cy.visit('http://wweat.ddns.net/')

    })
  
    it('Editar Perfil Rest', () => {
      cy.get('.hidden > :nth-child(1) > .z-10 > .gap-5 > [href="/login"] > .bg-wwe').click()
      cy.contains('Iniciar Sesión')
      cy.get('#email').type('RestauranteEmail@gmail.com', { delay: 25 })
      cy.get('#contrasena').type('hola1234', { delay: 25 })
      cy.get(':nth-child(3) > .flex').click()
      cy.contains('Menú')
      cy.get('#cypress').click();
      cy.contains('Configuración').click();
      cy.get(':nth-child(2) > .flex > .font-aref').click();
      cy.get('#alias').type('Test_User_R');
      cy.get('#contrasena').type('hola1234');
      cy.get('#url_img_usuario').selectFile("./cypress/imgs/logoprodu_FINAL.png");
      cy.get('.md\\:w-64').click();
      cy.wait(3000);
      cy.get('#cypress').click();
      cy.contains('Salir').click()
      cy.get('.m-auto > .w-14').click()
      cy.get('.hidden > :nth-child(1) > .z-10 > .gap-5 > [href="/login"] > .bg-wwe').click()
      cy.get('#email').type('RestauranteEmail@gmail.com', { delay: 25 })
      cy.get('#contrasena').type('hola1234', { delay: 25 })
      cy.get(':nth-child(3) > .flex').click()
      cy.get('#cypress').click();
      cy.contains('Perfil').click();
    })
  })