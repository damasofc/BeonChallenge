describe('Google Page Tests', () => { 
    
    it('Valid Search: BEON Tech Studio', () => {
        
        cy.visit('https://www.google.com/')
        cy.searchText('BEON Tech Studio')
        cy.get('#oFNiHe').should('be.visible')
        cy.get('#rso').should('be.visible')
    });

    it('Search Result Navigation: First Link', () => {
        
        cy.visit('https://www.google.com/')
        cy.searchText('BEON Tech Studio')
        cy.clickFirstSearchResult();
        cy.origin('https://beon.tech', () => {
            cy.get('img[alt="BEON.tech"]').should('be.visible')

        })
        
    });
 })