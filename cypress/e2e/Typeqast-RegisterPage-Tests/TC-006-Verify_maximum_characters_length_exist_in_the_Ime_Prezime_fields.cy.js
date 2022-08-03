/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-006 - Verify the maximum characters length exist in the "Ime" and "Prezime" fields, enter 300 characters', () => {
    RegisterPage.enterNameInTheImeField('In the field "Ime" enter 300 characters "Character Counter is a 100% free online character count calculator that\'s simple to use. Sometimes users prefer simplicity over all of the detailed writing information Word Counter provides, and this is exactly what this tool offers and this is exactly what this tool offers and this is exactly 12345"')
                .enterLastNameInThePrezimeField('In the field "Ime" enter 300 characters "Character Counter is a 100% free online character count calculator that\'s simple to use. Sometimes users prefer simplicity over all of the detailed writing information Word Counter provides, and this is exactly what this tool offers and this is exactly what this tool offers and this is exactly 12345"')
                .clickOnTheRegistrujSeButton()
                .assertValidationErrorWhenEnter300CharacterInTheFirstNameField('Maksimalan broj karaktera je 255') //Bug-B002 -test fails, no field limitation error message
                .assertValidationErrorWhenEnter300CharacterInTheLastNameField('Maksimalan broj karaktera je 255')

})

})