/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-005 - Verify the "Ime" and "Prezime" field needs to only accept the alphabet values', () => {
    RegisterPage.enterNameInTheImeField('Marko12!')
                .enterLastNameInThePrezimeField('Markovic3&%')
                .clickOnTheRegistrujSeButton()
                .assertValidationErrorWhenEnterNonAlphabeticValueInTheFirstNameField('Unesite samo slovne karaktere u polje') //Bug-B001 -test fails, no error message for input field validation
                .assertValidationErrorWhenEnterNonAlphabeticValueInTheLastNameField('Unesite samo slovne karaktere u polje')

})

})