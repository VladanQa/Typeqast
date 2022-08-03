/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-013 -Verify the phone number when passing alphanumeric dat', () => {
    RegisterPage.enterPhoneNumberInTheTelefonField('Telefon:', 'eadx5$7567#7')
                .clickOnTheRegistrujSeButton()
                .assertPhoneFiledHaveErrorMessageAfterEnteringInvalidPhoneNumber('Pogresan telefon') //Bug-B-005 - No Phone Number Validation
   
})

})