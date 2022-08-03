/// <reference types="Cypress" />

const random = Math.floor(Math.random() * 1000 + 1)

import registerPage from "../Pages/registerPage";

describe('Typeqast Automation Register Page', () => {

    let RegisterPage = new registerPage()

    before(() => {
        cy.visit('https://www.links.hr/hr/register')
        RegisterPage.ifAcceptCookieButtonAppearClickOnIt()
        
      })

it('TC-017 -Verify the password limit when enter value less than min', () => {
    RegisterPage.enterPasswordInTheLozinkaField('Test1')
                .clickOnTheConfirmPasswordField()
                .assertValidationErrorExistOnMandatoryFieldAfterClickingRefisterButtonAtPasswordField('Lozinka treba imati najmanje 6 znakova.')
   
})

})