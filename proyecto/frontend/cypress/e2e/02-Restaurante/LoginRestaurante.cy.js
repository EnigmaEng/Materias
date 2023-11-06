describe('LoginRestaurante', () => {
    beforeEach(() => {
      cy.visit('http://wweat.ddns.net/');
      //cy.visit('http://127.0.0.1:5173/')
    });
  
    it('Logueando usuario de restaurante', () => {
      cy.get('.hidden > :nth-child(1) > .z-10 > .gap-5 > [href="/login"] > .bg-wwe').click();
      cy.contains('Iniciar Sesión');
      cy.get('#email').type('RestauranteEmail@gmail.com', { delay: 45 });
      cy.get('#contrasena').type('SoyRestaurante123', { delay: 45 });
      cy.get(':nth-child(3) > .flex').click();
      
      // Aserción personalizada: detendrá el test si se encuentra el elemento "Menú"
      cy.get('body').should('contain', 'Menú').then(($element) => {
        if ($element) {
          // Si se encuentra el elemento "Menú", lanzamos un error personalizado para detener el test
          throw new Error('El elemento "Menú" se encontró. El test se detendrá.');
        }
      });
    });
  });
  