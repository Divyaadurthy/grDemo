describe('This is a GR Demo tests', () => {
  it('End to end guestresevation flow Invalid card Number Test', () => {
    cy.visit('https://www.google.com/');
    cy.get('.SDkEP').type('bellagio hotel las vegas').click();
    cy.wait(30000);

    cy.origin('https://www.guestreservations.com/', () => {
      cy.visit('bellagio-las-vegas/booking?');

      cy.wait(30000);

      cy.contains('Find Rooms').click();
      cy.wait(3000);

      cy.get(
        ':nth-child(1) > .room-info > .body > .room-items > .room-item > .horizontal-flex > .info > .bg-block > .btn'
      ).click();

      cy.wait(3000);

      cy.get('[placeholder="First Name"]').type('Divya Adurthy');
      cy.get('[placeholder="Last Name"]').type(' Adurthy');

      cy.get('[type="email"]').click().type('adurthyd@gmail.com');
      cy.get('#phone').click().type('34424455676');

      cy.get('#bill_city').click().type('San Ramon');
      //cy.get('#billing_state').select('California').click();
      cy.get('#bill_address').type('761 Pradera way');
      cy.get('#bill_zip').type('94583');

      //bill info

      cy.get('#bill_first').type('Divya');
      cy.get('#bill_last').type('Adurthy');

      cy.get('#credit_card_number').type('1234567891234567');
      cy.get('#credit_card_verification').type('232');

      cy.get('[data-option="master"]').click({ force: true });
      cy.get(':nth-child(4) > .btn').click();

      cy.get('#cc_expmonth').click();
      cy.wait(4000).contains('06 - Jun').click();

      cy.get('#cc_expyear').click();
      cy.wait(4000).contains('2026').click();

      cy.get(':nth-child(4) > .btn').click();
      cy.wait(2000);

  
      cy.on('window:alert', (txt) => {
        expect(txt).to.contains('Credit card is declined.');
      });
    });
  });

  it('End to end resevation flow Invalid Email Address Test', () => {
    cy.visit('https://www.google.com/');
    cy.get('.SDkEP').type('bellagio hotel las vegas').click();
    cy.wait(3000);

    cy.origin('https://www.guestreservations.com/', () => {
      cy.visit('bellagio-las-vegas/booking?');

      cy.wait(3000);

      cy.contains('Find Rooms').click();
      cy.wait(30000);

      cy.get(
        ':nth-child(1) > .room-info > .body > .room-items > .room-item > .horizontal-flex > .info > .bg-block > .btn'
      ).click();

      cy.wait(3000);

      cy.get('[placeholder="First Name"]').type('Divya Adurthy');
      cy.get('[placeholder="Last Name"]').type(' Adurthy');

      cy.get('[type="email"]').click().type('adurthyd@gmail.com');
      cy.get('#phone').click().type('34424455676');

      cy.get('#bill_city').click().type('San Ramon');

      cy.get('#bill_address').type('761 Pradera way');
      cy.get('#bill_zip').type('94583');

      //bill info

      cy.get('#bill_first').type('Divya');
      cy.get('#bill_last').type('Adurthy');

      cy.get('#credit_card_number').type('1234567891234567');
      cy.get('#credit_card_verification').type('232');

      cy.get('[data-option="master"]').click({ force: true });
      cy.get(':nth-child(4) > .btn').click();

      cy.get('#cc_expmonth').click();
      cy.wait(4000).contains('06 - Jun').click();

      cy.get('#cc_expyear').click();
      cy.wait(4000).contains('2026').click();

      cy.get(':nth-child(4) > .btn').click();

      cy.wait(30000);

      cy.get('[type="email"]').clear();

      cy.get('[type="email"]').type('adurthy@gmail.c');

      cy.get(':nth-child(4) > .btn').click();

      cy.wait(3000);

      //cy.get('div h4').find('Email is invalid. Please ensure your email address is accurate, or try a different one.')
      //.should('have.text','Email is invalid.')

      // cy.get('h4#headingText').find('Email is invalid.').should("be.visible");

      cy.on('window:alert', (txt) => {
        expect(txt).to.contains('Email is invalid');
      });
    });
  });
});
