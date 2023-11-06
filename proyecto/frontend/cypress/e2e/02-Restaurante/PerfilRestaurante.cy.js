describe('LoginRestaurante', () => {
    beforeEach(() => {
      cy.visit('http://wweat.ddns.net/')
      //cy.visit('http://127.0.0.1:5173/')
    })
  
    it('Listar Perfil Rest', () => {
      cy.get('.hidden > :nth-child(1) > .z-10 > .gap-5 > [href="/login"] > .bg-wwe').click()
      cy.contains('Iniciar Sesión')
      cy.get('#email').type('RestauranteEmail@gmail.com', { delay: 25 })
      cy.get('#contrasena').type('SoyRestaurante123', { delay: 25 })
      cy.get(':nth-child(3) > .flex').click()
      cy.contains('Menú')
      
      // Esperar antes de hacer clic en el botón
      cy.wait(1000); // Ajusta el tiempo según sea necesario
      cy.get('#cypress').click({ force: true });
  
      // Hacer clic en la opción "Perfil"
      cy.contains('Perfil').click();
    })
  })
  