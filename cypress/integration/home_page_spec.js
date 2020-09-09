describe('Home page', () => {
    it('Successfully loads', () => {
        cy.visit('/');
    });
    it('can click on navbar links', () => {
        cy.get('li.nav-item')
            .contains('Highlighted Episode')
            .click();
        cy.get('li.nav-item')
            .contains('Test')
            .click();

        //This needs to be the last one clicked!!!    
        cy.get('li.nav-item')
            .contains('Home')
            .click();

    });
    it('has a header', () => {
        cy.get('h1')
            .contains("The Blue Knight's Adventures");
    });
    it('has articles I can visit', () => {
        cy.get('h2.card-title')
            .children()
            .each(($a, index, $as) => {
                cy.wrap($a).should('have.attr', 'href');
            });
    });
});