/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-015 - Verify if the length of the phone number is incorrect less than 12', () => {
    RegisterPage.enterPhoneNumberInTheTelefonField('Telefon:', '+12312123456')
                .clickOnTheRegistrujSeButton()
                .assertPhoneFiledHaveErrorMessageAfterEnteringInvalidPhoneNumber('Pogresan telefon') //Bug-B-007 - No Phone Number Validation
   
})

})