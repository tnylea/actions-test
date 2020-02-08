describe('My First Test', function() {
    it('Check content on the page', function() {
      cy.visit('http://localhost:3000')
  
      cy.contains('Hello Github Actions!')
    })
  })