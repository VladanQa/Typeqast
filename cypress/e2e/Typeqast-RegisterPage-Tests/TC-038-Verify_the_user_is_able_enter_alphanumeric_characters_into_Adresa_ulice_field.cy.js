/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-038- Verify that the user is able to enter a alphanumeric characters into the "Adresa ulice" field', () => {
    RegisterPage.enterStreetAddressInTheAdresaUliceField('Adresa ulice:','Skadarska 15a')
                .assertAddressDontHaveErrorMessageAfterEnteringValued()
                
})

})