/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })
  
it('TC-041 - Verify that the dropdown does not appear when entering numeric characters in the "Grad" field', () => {
    RegisterPage.enterAlhabeticCharactersInZipPostalCode('Grad:', '21000')
                .assertDropdownOptionsNotAppears()


})


})