/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-018 -Verify the password limit when enter value greater than max', () => {
    RegisterPage.enterPasswordInTheLozinkaField('12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And12345678901!@#$%^And')
                .clickOnTheConfirmPasswordField()
                .assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtPasswordField('Lozinka treba imati najvise 999 znakova.') //Bug-B-009 Password Length
   
})

})