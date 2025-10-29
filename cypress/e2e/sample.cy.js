describe('Sample Cypress Test Suite', () => {
  beforeEach(() => {
    // This runs before each test
    cy.visit('https://example.com')
  })

  it('should display the page title', () => {
    cy.title().should('contain', 'Example Domain')
  })

  it('should have visible page content', () => {
    cy.get('h1').should('be.visible')
    cy.get('h1').should('contain', 'Example Domain')
  })

  it('should contain a link', () => {
    cy.get('a').should('exist')
    cy.get('a').should('have.attr', 'href')
  })

  it('should demonstrate basic Cypress assertions', () => {
    // Test various elements and assertions
    cy.get('body').should('be.visible')
    cy.get('p').should('have.length.greaterThan', 0)
    cy.url().should('include', 'example.com')
  })

  it('should demonstrate interaction with elements', () => {
    // Click on the link if it exists
    cy.get('a').first().then(($link) => {
      if ($link.length > 0) {
        cy.wrap($link).should('be.visible')
      }
    })
  })
})

describe('Advanced Test Scenarios', () => {
  it('should handle viewport and responsive design', () => {
    // Test desktop view
    cy.viewport(1280, 720)
    cy.visit('https://example.com')
    cy.get('body').should('be.visible')

    // Test mobile view
    cy.viewport('iphone-x')
    cy.get('body').should('be.visible')
  })

  it('should demonstrate waiting and timing', () => {
    cy.visit('https://example.com')

    // Wait for elements
    cy.get('body', { timeout: 10000 }).should('be.visible')

    // Add custom wait
    cy.wait(1000)

    // Verify page is fully loaded
    cy.document().should('have.property', 'readyState', 'complete')
  })
})
