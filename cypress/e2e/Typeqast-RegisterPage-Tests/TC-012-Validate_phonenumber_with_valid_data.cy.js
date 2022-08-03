/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-012 -Validate phonenumber vith valid data', () => {
    RegisterPage.enterPhoneNumberInTheTelefonField('Telefon:', '+123121234567')
                .clickOnTheRegistrujSeButton()
                .assertPhoneFileDoNotHaveErrorMessageAfterEnteringValidPhoneNumber()
   
})

})