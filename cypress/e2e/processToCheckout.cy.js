describe('Process to checkout', () => {
  it('empty field', () => {
    cy.visit('https://magento.softwaretestingboard.com/', { timeout: 120000, failOnStatusCode: false })
    cy.wait(5000)
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('sibunavi@cyclelove.cc')
    cy.get('#pass').type('Demo1234')
    cy.get('#send2').click()
    cy.wait(5000)
    cy.get('.minicart-wrapper').click()
    cy.get('#top-cart-btn-checkout').first().click()
    cy.get('[data-role="opc-continue"]').click();
    cy.get('[role="alert"]').should('contain', 'The shipping method is missing. Select the shipping method and try again.')
  });

  it('empty field', () => {
    cy.visit('https://magento.softwaretestingboard.com/', { timeout: 120000, failOnStatusCode: false })
    cy.wait(5000)
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('sibunavi@cyclelove.cc')
    cy.get('#pass').type('Demo1234')
    cy.get('#send2').click()
    cy.wait(1000)
    cy.get('.minicart-wrapper').click()
    cy.get('#top-cart-btn-checkout').first().click()
    cy.get('input[name="shippingAddress.street.0"]').should('be.visible').clear().type('Surabaya');
    cy.get('[data-role="opc-continue"]').click();
  });

  it('firstname field empty', () => {
    cy.visit('https://magento.softwaretestingboard.com/', { timeout: 120000, failOnStatusCode: false })
    cy.wait(5000)
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('sibunavi@cyclelove.cc')
    cy.get('#pass').type('Demo1234')
    cy.get('#send2').click()
    cy.wait(5000)
    cy.get('.minicart-wrapper').click()
    cy.get('#top-cart-btn-checkout').first().click()
    cy.get('input[name="firstname"]').should('be.visible').clear();
    cy.get('[class="field-error"]').should('This is a required field.')
  });

  it('Checkout when not logged in to your account', () =>{

  })
});
