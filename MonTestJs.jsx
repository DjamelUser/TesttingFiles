
describe('test_name', function() {

 it('what_it_does', function() {

    cy.viewport(1280, 578)
 
    cy.visit('https://www.cypress.io/')
 
    cy.visit('https://www.amazon.com/gp/homepage.html/ref=wt_urltypo/')
 
    cy.get('#nav-main > .nav-fill > #nav-xshop-container > #nav-xshop > .nav-a:nth-child(2)').click()
 
    cy.visit('https://www.amazon.com/international-sales-offers/b/?ie=UTF8&node=15529609011&ref_=nav_navm_intl_deal_btn')
 
    cy.get('.a-declarative > .a-dropdown-container > .a-button > .a-button-inner > .a-button-text').click()
 
    cy.get('.a-popover-wrapper > .a-popover-inner > .a-nostyle > .a-dropdown-item > #dropdown-8680899967411255_1').click()
 
 })

})
copy to clipboard