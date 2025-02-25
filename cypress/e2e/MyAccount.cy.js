describe('Edit Account', () => {
  it('Succes Change Password ', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > .authorization-link > a'). click()
    cy.get('#email').type('donitata@gmail.com')
    cy.get('#pass').type('Cobacoba12_')
    cy.get('#send2').click()
    cy.get('.logo > img').should('be.visible')
  })
})
