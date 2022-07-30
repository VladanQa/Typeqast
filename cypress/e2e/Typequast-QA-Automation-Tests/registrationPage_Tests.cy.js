/// <reference types="Cypress" />

import registerPage from "../Pages/registerPage";

describe('4.5.0 - J11-001 - Clean Bild tests', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        
      })
  
  it('enter text into postanski broj field', () => {
    RegisterPage.enterAdresaUlice('Test1234')

})

})