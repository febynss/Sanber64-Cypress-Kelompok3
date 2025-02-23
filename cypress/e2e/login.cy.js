describe('Magento Login Page', () => {
  it('Login Success', () => {
    cy.visit('https://magento.softwaretestingboard.com/', { timeout: 120000, failOnStatusCode: false })
    cy.wait(5000)
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('sibunavi@cyclelove.cc')
    cy.get('#pass').type('Demo1234')
    cy.get('#send2').click()
    cy.get('.logo > img').should('be.visible')
  })
})
it('Login Empty Email', () => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login/')
    cy.get('#email').clear()
    cy.get('#pass').type('Demo1234')
    cy.get('#send2').click()

    cy.get('#email-error').should('be.visible')
  })
  it('Login Empty Password', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/', { timeout: 60000 }) 

    cy.get('#email').type('sibunavi@cyclelove.cc')
    cy.get('#pass').clear()
    cy.get('#send2').click()

    cy.get('#pass-error', { timeout: 10000 }).should('be.visible')
  })
  it('Login Empty Email and Password'), () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/', { timeout: 60000 }) 

    cy.get('#email').clear()
    cy.get('#pass').clear()
    cy.get('#send2').click()

    cy.get('#email-error', { timeout: 10000 }).should('be.visible')
    .and('contain', 'This is a required field.')
  
  cy.get('#pass-error', { timeout: 10000 }).should('be.visible')
    .and('contain', 'This is a required field.')  
  }