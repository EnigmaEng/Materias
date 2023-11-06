describe('LoginRestaurante', () => {
    beforeEach(() => {
<<<<<<< HEAD
      cy.visit('http://localhost:5173/')
=======
      cy.visit('http://127.0.0.1:5173/')
>>>>>>> eb85bb4c240810292c12a9139a2da7b22575a86c
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
      cy.get('#contrasena').type('SoyRestaurante123');
      cy.get('#url_img_usuario').selectFile("./cypress/imgs/pruebita.jpeg");
      cy.get('.md\\:w-64').click();
<<<<<<< HEAD
      cy.wait(1500);
=======
      cy.contains('Los cambios persistieron correctamente.');
      cy.wait(3000);
>>>>>>> eb85bb4c240810292c12a9139a2da7b22575a86c
      cy.get('#cypress').click();
      cy.contains('Salir').click()
      cy.get('.m-auto > .w-14').click()
      cy.get('.hidden > :nth-child(1) > .z-10 > .gap-5 > [href="/login"] > .bg-wwe').click()
      cy.get('#email').type('RestauranteEmail@gmail.com', { delay: 25 })
      cy.get('#contrasena').type('SoyRestaurante123', { delay: 25 })
      cy.get(':nth-child(3) > .flex').click()
      cy.get('#cypress').click();
      cy.contains('Perfil').click();
    })
  })