describe('Magento Create an Account', () => {
    it('User Create an account with valid data', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/'); 
  
      cy.get('#firstname').type('Raeza'); 
      cy.get('#lastname').type('Nabila'); 
      cy.get('#email_address').type('sibunavi@cyclelove.cc'); 
      cy.get('#password').type('Demo1234'); 
      cy.get('#password-confirmation').type('Demo1234'); 
      cy.get('button[title="Create an Account"]').click();
  
      cy.url().should('include', '/customer/account/'); 
      cy.contains('Thank you for registering').should('be.visible');
    });
  
    it('This email already has an account', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
  
      cy.get('#firstname').type('Raeza');
      cy.get('#lastname').type('Nabila');
      cy.get('#email_address').type('dymuzeba@logsmarter.net'); 
      cy.get('#password').type('Demo1234');
      cy.get('#password-confirmation').type('Demo1234');
      cy.get('button[title="Create an Account"]').click();

      cy.contains('There is already an account with this email address').should('be.visible');
    });
  
    it('Password does not match', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
  
      cy.get('#firstname').type('Raeza');
      cy.get('#lastname').type('Nabila');
      cy.get('#email_address').type('sibunavi@cyclelove.cc');
      cy.get('#password').type('Demo1234');
      cy.get('#password-confirmation').type('Test@1234'); 
      cy.get('button[title="Create an Account"]').click();

      cy.contains('Please enter the same value again.').should('be.visible');
    });
  });
  