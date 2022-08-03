/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-022 -Verify the user can entering password without alphanumeric characters', () => {
    RegisterPage.enterPasswordInTheLozinkaField('!@#$%^&')
                .enterConfirmPasswordInThePotvrditeLozinkuField('!@#$%^&')
                .clickOnTheRegistrujSeButton()
                .assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtPasswordField('Lozinka treba da sadrzi velika I mala slova, brojeve I specijalne karaktere') //Bug - B-010
   
})

})