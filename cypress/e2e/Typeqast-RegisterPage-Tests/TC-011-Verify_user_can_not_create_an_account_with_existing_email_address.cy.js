/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-011 - Verify user can not create an account with existing email address', () => {
    RegisterPage.enterNameInTheImeField('Ivana')
                .enterLastNameInThePrezimeField('Markovic')
                .enterEmailITheElektronskaPostaField('markomarkovic@mailinator.com')
                .enterPasswordInTheLozinkaField('123456')
                .enterConfirmPasswordInThePotvrditeLozinkuField('123456')
                .clickOnTheRegistrujSeButton()
                .assertValidationErrorMessage('Navedena elektronska pošta/adresa postoji')
})

})