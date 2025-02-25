describe('Process to checkout', () => {
  it('empty field', () => {
    cy.visit('https://magento.softwaretestingboard.com/', { timeout: 120000, failOnStatusCode: false });
  
    // Tunggu hingga halaman sepenuhnya dimuat sebelum lanjut
    cy.get('.panel > .header > .authorization-link > a', { timeout: 10000 }).should('be.visible').click();
  
    // Login
    cy.get('#email', { timeout: 5000 }).should('be.visible').type('sibunavi@cyclelove.cc');
    cy.get('#pass', { timeout: 5000 }).should('be.visible').type('Demo1234');
    cy.get('#send2').should('be.visible').click();
  
    // Pastikan login berhasil sebelum lanjut
    cy.get('.greet.welcome', { timeout: 10000 }).should('contain', 'Welcome');
  
    // Buka keranjang
    cy.get('.minicart-wrapper', { timeout: 10000 }).should('be.visible').click();
  
    // Tunggu hingga tombol checkout muncul sebelum mengklik
    cy.get('#top-cart-btn-checkout', { timeout: 10000 }).should('be.visible').click();
  
    // Tunggu hingga tombol "Continue" di halaman checkout muncul
    cy.get('[data-role="opc-continue"]', { timeout: 10000 }).should('be.visible').click();
  
    // Verifikasi pesan error jika metode pengiriman belum dipilih
    cy.get('[role="alert"]', { timeout: 10000 }).should('contain', 'The shipping method is missing. Select the shipping method and try again.');
  });
    cy.visit('https://magento.softwaretestingboard.com/', { timeout: 120000, failOnStatusCode: false })
    cy.wait(5000)
    
    // Login
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type('sibunavi@cyclelove.cc', { force: true })
    cy.get('#pass').type('Demo1234', { force: true })
    cy.get('#send2').click()

    cy.wait(5000) 

    // Klik mini cart dan checkout
    cy.get('.minicart-wrapper', { waitForAnimations: false }).click();
    cy.get('#top-cart-btn-checkout', { timeout: 10000 }).should('be.visible').click();
    
    cy.wait(5000)

    // Hapus isi field alamat
    cy.get('[name="street[0]"]', { timeout: 10000 })
      .should('exist')
      .and('be.visible')
      .and('not.be.disabled')
      .clear();
    
    // Klik tombol lanjutkan
    cy.get('[data-role="opc-continue"]').click();
});

  it('mengisi alamat', () => {
    it('mengisi alamat', () => {
      cy.visit('https://magento.softwaretestingboard.com/', { timeout: 120000, failOnStatusCode: false });
      cy.wait(5000);
  
      // Login
      cy.get('.panel > .header > .authorization-link > a').click();
      cy.get('#email').type('sibunavi@cyclelove.cc', { force: true });
      cy.get('#pass').type('Demo1234', { force: true });
      cy.get('#send2').click();
      cy.wait(5000);
  
      // Klik mini cart dan checkout
      cy.get('.minicart-wrapper', { waitForAnimations: false }).click();
      cy.get('#top-cart-btn-checkout', { timeout: 10000 }).should('be.visible').click();
      cy.wait(5000);
  
      // Hapus isi field alamat dengan selector yang lebih stabil
      cy.get('[name="street[0]"]', { timeout: 10000 })
        .should('exist')
        .and('be.visible')
        .and('not.be.disabled')
        .clear();
  
      // Validasi error message muncul
      cy.get('.field-error[data-bind]', { timeout: 5000 })
        .invoke('text')
        .then((text) => {
          expect(text.trim()).to.eq('This is a required field.')
        })
  }); 
  })

