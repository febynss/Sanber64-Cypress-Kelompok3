describe('Magento Login Page', () => {
  it('Login Success', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('sibunavi@cyclelove.cc')
    cy.get('#pass').type('Demo1234')
    cy.get('#send2').click()
  })
})
it('Login Empty Email', () => {
  cy.get('.panel > .header > .authorization-link > a').click()
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('Demo1234')
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
})