describe('Home page', () => {
    it('Successfully loads', () => {
        cy.visit('/');
    });
    it('can click on navbar links', () => {
        cy.get('li.nav-item')
            .contains('Highlighted Episode')
            .click();
        
        cy.get('li.nav-item')
            .contains('Home')
            .click();
    });
    it('has a header', () => {
        cy.get('h1')
            .contains("The Blue Knight's Adventures");
    });
    it('has an article I can visit', () => {
        cy.get('h2')
            .first()
            .children()
            .click();
    })
});