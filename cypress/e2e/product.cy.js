describe('Choose Product', () => {
  it('link to sign in', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('a').click()
})
//success

  it('Success Login', () => {
      cy.get('#email').type('sibunavi@cyclelove.cc')
      cy.get('#pass').type('Demo1234')
      cy.get('#send2').click()
  })

  it('product', () => {
    cy.get('#email').type('sibunavi@cyclelove.cc')
    cy.get('#pass').type('Demo1234')
    cy.get('#send2').click()
})
})