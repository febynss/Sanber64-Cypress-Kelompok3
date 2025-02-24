describe('Choose Product', () => {


  it('choose product', () => {
    // visit website
    cy.visit('https://magento.softwaretestingboard.com/', { timeout: 120000, failOnStatusCode: false })
    cy.wait(5000)

    // Login with account
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('sibunavi@cyclelove.cc')
    cy.get('#pass').type('Demo1234')
    cy.get('#send2').click()
    cy.wait(5000)

    // choose product
    cy.get('#ui-id-25').click({force: true})

    // click product display
    cy.get(':nth-child(11) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    
    // add product to cart
    cy.get('#product-addtocart-button').click()
})
})