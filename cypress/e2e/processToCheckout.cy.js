describe('Process to checkout', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/', { timeout: 120000, failOnStatusCode: false });
    cy.wait(3000);

    // Login
    cy.get('.panel > .header > .authorization-link > a').click();
    cy.get('#email').type('sibunavi@cyclelove.cc', { force: true });
    cy.get('#pass').type('Demo1234', { force: true });
    cy.get('#send2').click();
    
  });

  it('should display an error when trying to checkout with an empty shipping method', () => {
    // Open mini cart and proceed to checkout
    cy.get('.minicart-wrapper').click();
    cy.get('#top-cart-btn-checkout', { timeout: 10000 }).should('be.visible').click();

    // Attempt to continue without selecting a shipping method
    cy.get('[data-role="opc-continue"]', { timeout: 10000 }).should('be.visible').click();

    // Validate error message appears
    cy.get('#co-shipping-method-form > div.message.notice', { timeout: 5000 })
      .should('be.visible')
      .and('contain', 'The shipping method is missing. Select the shipping method and try again.');
  });

  it('should display an error when clearing the firstname field', () => {
    // Open mini cart and proceed to checkout
    cy.get('.minicart-wrapper').click();
    cy.get('#top-cart-btn-checkout', { timeout: 10000 }).should('be.visible').click();

    // Wait for checkout page to load
    cy.wait(5000);

    // Clear the firstname field
    cy.get('input[name="firstname"]', { timeout: 10000 })
    .should('exist')
    .and('be.visible')
    .and('not.be.disabled')
    .clear();
  

    // Try to continue
    cy.get('[data-role="opc-continue"]').click();

    // Validate error message appears
    cy.get('.field-error[data-bind]', { timeout: 5000 })
      .invoke('text')
      .should('contain', 'This is a required field.');
  });

  it('should allow filling the address and proceed', () => {
    // Open mini cart and proceed to checkout
    cy.get('.minicart-wrapper').click();
    cy.get('#top-cart-btn-checkout', { timeout: 10000 }).should('be.visible').click();

    cy.wait(5000);

    // Fill in the address field
    cy.get('[name="street[0]"]', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .and('not.be.disabled')
      .clear()
      .type('1234 Elm Street');

    // Click continue
    cy.get('[data-role="opc-continue"]').click();

    // Ensure no error message appears
    cy.get('.field-error[data-bind]', { timeout: 5000 }).should('not.exist');
  });

  it('should display an error when clearing the lastname field', () => {
    // Open mini cart and proceed to checkout
    cy.get('.minicart-wrapper').click();
    cy.get('#top-cart-btn-checkout', { timeout: 10000 }).should('be.visible').click();

    // Wait for checkout page to load
    cy.wait(5000);

    // Clear the lastname field
    cy.get('input[name="lastname"]', { timeout: 10000 })
    .should('exist')
    .and('be.visible')
    .and('not.be.disabled')
    .clear();
  

    // Try to continue
    cy.get('[data-role="opc-continue"]').click();

    // Validate error message appears
    cy.get('.field-error[data-bind]', { timeout: 5000 })
      .invoke('text')
      .should('contain', 'This is a required field.');
  });

});
